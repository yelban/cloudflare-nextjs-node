import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";
import cache from "@opennextjs/cloudflare/kv-cache";
 
const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      // set  to "dummy" to disable KV cache
      incrementalCache: async () => cache,
      tagCache: "dummy",
      queue: "dummy",
    },
  },
 
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
  
  dangerous: {
    enableCacheInterception: false,
  },
};
 
export default config;
