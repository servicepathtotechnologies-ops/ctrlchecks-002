import type { NodeDoc } from '../types';

export const notionDoc: NodeDoc = {
  "slug": "notion",
  "displayName": "Notion",
  "category": "Data",
  "logoUrl": "/icons/nodes/notion.svg",
  "description": "Read, write, update, or delete pages, databases, and blocks in Notion Use this node when a workflow needs notion behavior with schema-driven inputs from the CtrlChecks node registry.",
  "credentialType": "None",
  "credentialSetupSteps": [],
  "credentialDocsUrl": "",
  "resources": [
    {
      "name": "Page",
      "description": "Page is a Notion resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into create.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into update.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Archive",
          "value": "archive",
          "description": "Archive with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into archive.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs archive and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Restore",
          "value": "restore",
          "description": "Restore with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into restore.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs restore and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into query.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Append Children",
          "value": "appendChildren",
          "description": "Append Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into append children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs append children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List Children",
          "value": "listChildren",
          "description": "List Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Get Me",
          "value": "getMe",
          "description": "Get Me with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get me.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get me and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into search.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    },
    {
      "name": "Database",
      "description": "Database is a Notion resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into create.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into update.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Archive",
          "value": "archive",
          "description": "Archive with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into archive.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs archive and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Restore",
          "value": "restore",
          "description": "Restore with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into restore.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs restore and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into query.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Append Children",
          "value": "appendChildren",
          "description": "Append Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into append children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs append children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List Children",
          "value": "listChildren",
          "description": "List Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Get Me",
          "value": "getMe",
          "description": "Get Me with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get me.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get me and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into search.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    },
    {
      "name": "Block",
      "description": "Block is a Notion resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into create.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into update.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Archive",
          "value": "archive",
          "description": "Archive with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into archive.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs archive and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Restore",
          "value": "restore",
          "description": "Restore with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into restore.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs restore and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into query.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Append Children",
          "value": "appendChildren",
          "description": "Append Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into append children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs append children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List Children",
          "value": "listChildren",
          "description": "List Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Get Me",
          "value": "getMe",
          "description": "Get Me with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get me.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get me and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into search.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    },
    {
      "name": "User",
      "description": "User is a Notion resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into create.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into update.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Archive",
          "value": "archive",
          "description": "Archive with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into archive.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs archive and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Restore",
          "value": "restore",
          "description": "Restore with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into restore.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs restore and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into query.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Append Children",
          "value": "appendChildren",
          "description": "Append Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into append children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs append children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List Children",
          "value": "listChildren",
          "description": "List Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Get Me",
          "value": "getMe",
          "description": "Get Me with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get me.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get me and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into search.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    },
    {
      "name": "Comment",
      "description": "Comment is a Notion resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into create.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into update.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Archive",
          "value": "archive",
          "description": "Archive with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into archive.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs archive and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Restore",
          "value": "restore",
          "description": "Restore with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into restore.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs restore and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into query.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Append Children",
          "value": "appendChildren",
          "description": "Append Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into append children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs append children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List Children",
          "value": "listChildren",
          "description": "List Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Get Me",
          "value": "getMe",
          "description": "Get Me with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get me.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get me and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into search.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    },
    {
      "name": "Search",
      "description": "Search is a Notion resource available in this node.",
      "operations": [
        {
          "name": "Get",
          "value": "get",
          "description": "Get with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List",
          "value": "list",
          "description": "List with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Create",
          "value": "create",
          "description": "Create with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into create.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs create and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Update",
          "value": "update",
          "description": "Update with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into update.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs update and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Archive",
          "value": "archive",
          "description": "Archive with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into archive.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs archive and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Restore",
          "value": "restore",
          "description": "Restore with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into restore.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs restore and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Query",
          "value": "query",
          "description": "Query with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into query.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs query and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Append Children",
          "value": "appendChildren",
          "description": "Append Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into append children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs append children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "List Children",
          "value": "listChildren",
          "description": "List Children with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into list children.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs list children and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Delete",
          "value": "delete",
          "description": "Delete with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into delete.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs delete and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Get Me",
          "value": "getMe",
          "description": "Get Me with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into get me.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs get me and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        },
        {
          "name": "Search",
          "value": "search",
          "description": "Search with the Notion node using the configured input fields.",
          "fields": [
            {
              "name": "Page Id",
              "internalKey": "pageId",
              "type": "string",
              "required": false,
              "description": "Notion Page ID",
              "example": "{{ $json.pageId }}"
            },
            {
              "name": "Database Id",
              "internalKey": "databaseId",
              "type": "string",
              "required": false,
              "description": "Notion Database ID",
              "example": "{{ $json.databaseId }}"
            },
            {
              "name": "Parent Page Id",
              "internalKey": "parentPageId",
              "type": "string",
              "required": false,
              "description": "Parent Page ID (for creating pages or databases inside a page)",
              "example": "{{ $json.parentPageId }}"
            },
            {
              "name": "Block Id",
              "internalKey": "blockId",
              "type": "string",
              "required": false,
              "description": "Notion Block ID",
              "example": "{{ $json.blockId }}"
            },
            {
              "name": "User Id",
              "internalKey": "userId",
              "type": "string",
              "required": false,
              "description": "Notion User ID",
              "example": "{{ $json.userId }}"
            },
            {
              "name": "Title",
              "internalKey": "title",
              "type": "string",
              "required": false,
              "description": "Page title or database title (plain text — no JSON needed)",
              "example": "{{ $json.title }}"
            },
            {
              "name": "Content",
              "internalKey": "content",
              "type": "string",
              "required": false,
              "description": "Page body / block text content (plain text)",
              "example": "{{ $json.content }}"
            },
            {
              "name": "Block Type",
              "internalKey": "blockType",
              "type": "select",
              "required": false,
              "description": "Block type for create/append: paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, code, quote, toggle, divider",
              "example": "paragraph",
              "defaultValue": "paragraph",
              "options": [
                "paragraph",
                "heading 1",
                "heading 2",
                "heading 3",
                "bulleted list item",
                "numbered list item",
                "toggle",
                "quote",
                "callout",
                "code",
                "divider"
              ]
            },
            {
              "name": "Code Language",
              "internalKey": "codeLanguage",
              "type": "string",
              "required": false,
              "description": "Programming language for code blocks (e.g. javascript, python)",
              "example": "plain text",
              "defaultValue": "plain text"
            },
            {
              "name": "Properties",
              "internalKey": "properties",
              "type": "string",
              "required": false,
              "description": "Page properties as simple JSON. Example: {\"Status\":\"In Progress\",\"Priority\":\"High\",\"Count\":3,\"Done\":false}. Use \"Field__type\" for explicit types: {\"Tags__multi_select\":\"Design,Frontend\"}. No Notion API format required.",
              "example": "{{ $json.properties }}"
            },
            {
              "name": "Filter Property",
              "internalKey": "filterProperty",
              "type": "string",
              "required": false,
              "description": "Database filter: property name (e.g. \"Status\")",
              "example": "{{ $json.filterProperty }}"
            },
            {
              "name": "Filter Type",
              "internalKey": "filterType",
              "type": "select",
              "required": false,
              "description": "Database filter: property type (text, number, checkbox, select, multi_select, date, status)",
              "example": "text",
              "defaultValue": "text",
              "options": [
                "text",
                "number",
                "checkbox",
                "select",
                "multi_select",
                "date",
                "status"
              ]
            },
            {
              "name": "Filter Condition",
              "internalKey": "filterCondition",
              "type": "select",
              "required": false,
              "description": "Database filter: condition (equals, contains, starts_with, greater_than, etc.)",
              "example": "equals",
              "defaultValue": "equals",
              "options": [
                "equals",
                "does not equal",
                "contains",
                "does not contain",
                "starts with",
                "ends with",
                "is empty",
                "is not empty",
                "greater than",
                "greater than or equal to",
                "less than",
                "less than or equal to"
              ]
            },
            {
              "name": "Filter Value",
              "internalKey": "filterValue",
              "type": "string",
              "required": false,
              "description": "Database filter: value to match",
              "example": "{{ $json.filterValue }}"
            },
            {
              "name": "Sort Property",
              "internalKey": "sortProperty",
              "type": "string",
              "required": false,
              "description": "Sort results by this property name (e.g. \"Created\")",
              "example": "{{ $json.sortProperty }}"
            },
            {
              "name": "Sort Direction",
              "internalKey": "sortDirection",
              "type": "select",
              "required": false,
              "description": "Sort direction",
              "example": "ascending",
              "defaultValue": "ascending",
              "options": [
                "Ascending",
                "Descending"
              ]
            },
            {
              "name": "Comment",
              "internalKey": "comment",
              "type": "string",
              "required": false,
              "description": "Comment text (plain text — no rich text JSON needed)",
              "example": "{{ $json.comment }}"
            },
            {
              "name": "Parent Discussion Id",
              "internalKey": "parentDiscussionId",
              "type": "string",
              "required": false,
              "description": "Parent Discussion ID (for inline comments on a discussion thread)",
              "example": "{{ $json.parentDiscussionId }}"
            },
            {
              "name": "Search Query",
              "internalKey": "searchQuery",
              "type": "string",
              "required": false,
              "description": "Search query text (leave empty to list all)",
              "example": "status:open"
            },
            {
              "name": "Search Filter",
              "internalKey": "searchFilter",
              "type": "select",
              "required": false,
              "description": "Limit search to: page, database (leave empty for all)",
              "example": "All",
              "options": [
                "All",
                "Pages only",
                "Databases only"
              ]
            },
            {
              "name": "Schema Json",
              "internalKey": "schemaJson",
              "type": "string",
              "required": false,
              "description": "Database property schema as JSON. Example: {\"Name\":{\"title\":{}},\"Status\":{\"select\":{\"options\":[{\"name\":\"To Do\"},{\"name\":\"Done\"}]}},\"Count\":{\"number\":{}}}",
              "example": "{{ $json.schemaJson }}"
            },
            {
              "name": "Is Inline",
              "internalKey": "isInline",
              "type": "boolean",
              "required": false,
              "description": "Create database inline inside a page (vs. full-page database)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Return All",
              "internalKey": "returnAll",
              "type": "boolean",
              "required": false,
              "description": "Return all results (auto-paginate)",
              "example": "false",
              "defaultValue": "false"
            },
            {
              "name": "Page Size",
              "internalKey": "pageSize",
              "type": "number",
              "required": false,
              "description": "Results per page (1–100)",
              "example": "10",
              "defaultValue": "10"
            }
          ],
          "outputExample": {
            "type": "type",
            "structure": "structure",
            "convertible": "convertible",
            "defaultValue": "defaultValue"
          },
          "outputDescription": "type: Value returned by the Notion node.\nstructure: Value returned by the Notion node.\nconvertible: Value returned by the Notion node.\ndefaultValue: Value returned by the Notion node.",
          "usageExample": {
            "scenario": "Use Notion in a workflow and pass upstream data into search.",
            "inputValues": {
              "Page Id": "{{ $json.pageId }}",
              "Database Id": "{{ $json.databaseId }}",
              "Parent Page Id": "{{ $json.parentPageId }}",
              "Block Id": "{{ $json.blockId }}",
              "User Id": "{{ $json.userId }}",
              "Title": "{{ $json.title }}",
              "Content": "{{ $json.content }}",
              "Block Type": "paragraph",
              "Code Language": "plain text",
              "Properties": "{{ $json.properties }}"
            },
            "expectedOutput": "The node runs search and exposes its result in the output panel for the next node."
          },
          "externalDocsUrl": "https://developers.notion.com/reference/intro"
        }
      ]
    }
  ],
  "commonErrors": [
    {
      "error": "Required field missing",
      "cause": "A required input is empty or an expression resolved to an empty value.",
      "fix": "Open the node, fill the required field, and inspect upstream output before running again."
    },
    {
      "error": "Invalid input format",
      "cause": "A field value does not match the format expected by the node or service API.",
      "fix": "Check JSON, date, URL, email, and ID fields against the examples shown in the node."
    }
  ],
  "relatedNodes": [
    "postgresql",
    "supabase",
    "database_read",
    "database_write",
    "google_sheets"
  ]
};
