import { describe, it, expect } from 'vitest';
import {
  ATTACH_INPUTS_PERSISTABLE_META_KEYS,
  buildFlatAttachInputsForNode,
  extractNodeConfigForAttachInputs,
  buildNestedAttachInputsFromNodes,
  buildScopedCredentialPayload,
} from '../attach-inputs-payload';

describe('attach-inputs-payload', () => {
  it('includes _fillMode, _ownershipUnlock, _fieldEnabled and excludes other _ keys', () => {
    const cfg = {
      message: 'hello',
      _fillMode: { message: 'buildtime_ai_once' },
      _ownershipUnlock: { apiKey: true },
      _fieldEnabled: { x: true },
      _internal: 'skip',
    };
    const out = extractNodeConfigForAttachInputs(cfg);
    expect(out.message).toBe('hello');
    expect(out._fillMode).toEqual(cfg._fillMode);
    expect(out._ownershipUnlock).toEqual(cfg._ownershipUnlock);
    expect(out._fieldEnabled).toEqual(cfg._fieldEnabled);
    expect((out as any)._internal).toBeUndefined();
  });

  it('buildNestedAttachInputsFromNodes nests by node id', () => {
    const nodes = [
      { id: 'n1', data: { config: { a: 1, _fillMode: { a: 'manual_static' } } } },
      { id: 'n2', data: { config: {} } },
    ];
    const nested = buildNestedAttachInputsFromNodes(nodes as any);
    expect(Object.keys(nested)).toEqual(['n1']);
    expect(nested.n1.a).toBe(1);
    expect(nested.n1._fillMode).toEqual({ a: 'manual_static' });
  });

  it('documents known meta keys set', () => {
    expect(ATTACH_INPUTS_PERSISTABLE_META_KEYS.has('_fillMode')).toBe(true);
  });

  it('buildFlatAttachInputsForNode emits config_<nodeId>_<field> keys', () => {
    const out = buildFlatAttachInputsForNode('node_a', {
      subject: 'hello',
      _fillMode: { subject: 'manual_static' },
      _internal: 'skip',
    });
    expect(out).toEqual({
      config_node_a_subject: 'hello',
      config_node_a__fillMode: { subject: 'manual_static' },
    });
  });

  it('buildScopedCredentialPayload emits cred_<nodeId>_<field> keys', () => {
    const out = buildScopedCredentialPayload('node_1', {
      apiKey: 'secret',
      webhookUrl: '',
      token: undefined,
    });
    expect(out).toEqual({
      cred_node_1_apiKey: 'secret',
    });
  });
});
