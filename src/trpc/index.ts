import { publicProcedure, router } from "./trpc";
export const appRouter = router({
  test: publicProcedure.query(() => {
    return "ello";
  }),
});

export type AppRouter = typeof appRouter;
