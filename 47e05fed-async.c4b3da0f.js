(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["47e05fed"],{"47e05fed":function(e,n,s){"use strict";s.d(n,"__esModule",{value:!0}),s.d(n,"texts",{enumerable:!0,get:function(){return a;}}),s("d8c6fe6d");let a=[{value:"Tongyi Qianwen provides model inference services compatible with OpenAI.",paraId:0},{value:"Alibaba Cloud - Tongyi Qianwen",paraId:0},{value:"It refers to a model inference service whose interface design and usage are consistent with OpenAI's API.",paraId:1,tocIndex:0},{value:"This means developers can use the same code and methods as they would for OpenAI models to interact with these compatible services, significantly reducing integration costs.",paraId:2,tocIndex:0},{value:"useXAgent",paraId:3},{value:"This method is ",paraId:4,tocIndex:1},{value:"a ready-to-use solution for React environments",paraId:4,tocIndex:1},{value:" provided by Ant Design X.",paraId:4,tocIndex:1},{value:"import { useXAgent } from '@ant-design/x';\n\n// ... react env\nconst [agent] = useXAgent({\n  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',\n  model: 'qwen-plus',\n  // Use cautiously in production!\n  dangerouslyApiKey: 'DASHSCOPE_API_KEY',\n});\n\nfunction request() {\n  agent.request(\n    {\n      // Conversation messages\n      messages: [\n        {\n          role: 'user',\n          content: 'Hello',\n        },\n      ],\n      // Enable streaming\n      stream: true,\n    },\n    {\n      // Success callback\n      onSuccess: (sseChunks) => {\n        // Triggered when the request completes\n        // This will contain the parsed sseChunks\n      },\n      onError: (error) => {\n        // Triggered in case of an error\n      },\n      onUpdate: (sse) => {\n        // Triggered during stream updates\n        // This will contain the parsed SSE object\n      },\n    },\n  );\n}\n",paraId:5,tocIndex:1},{value:"XRequest",paraId:3},{value:"This method is ",paraId:6,tocIndex:2},{value:"a ready-to-use solution for JavaScript environments",paraId:6,tocIndex:2},{value:" provided by Ant Design X.",paraId:6,tocIndex:2},{value:"import { XRequest } from '@ant-design/x';\n\nconst xRequest = XRequest({\n  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',\n  model: 'qwen-plus',\n  // Use cautiously in production!\n  dangerouslyApiKey: 'DASHSCOPE_API_KEY',\n});\n\nfunction request() {\n  xRequest.create(\n    {\n      // Conversation messages\n      messages: [\n        {\n          role: 'user',\n          content: 'Hello',\n        },\n      ],\n      // Enable streaming\n      stream: true,\n    },\n    {\n      // Success callback\n      onSuccess: (sseChunks) => {\n        // Triggered when the request completes\n        // This will contain the parsed sseChunks\n      },\n      onError: (error) => {\n        // Triggered in case of an error\n      },\n      onUpdate: (sse) => {\n        // Triggered during stream updates\n        // This will contain the parsed SSE object\n      },\n    },\n  );\n}\n",paraId:7,tocIndex:2}];}}]);
//# sourceMappingURL=47e05fed-async.c4b3da0f.js.map