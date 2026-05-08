import { createFileRoute } from "@tanstack/react-router";
import { seedAdmin } from "@/lib/admin.functions";

export const Route = createFileRoute("/api/public/setup")({
  server: {
    handlers: {
      POST: async () => {
        try {
          const result = await seedAdmin();
          return Response.json(result);
        } catch (error: any) {
          return Response.json({ error: error.message }, { status: 500 });
        }
      },
    },
  },
});
