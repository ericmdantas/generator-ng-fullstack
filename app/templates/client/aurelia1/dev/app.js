export class App {
    configureRouter(config, router) {
        config.map([
            {route: ["", "todo"], moduleId: "./todo/components/todo"}
        ]);

        this.router = router;
    }
}