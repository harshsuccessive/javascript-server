![](https://developers.redhat.com/blog/wp-content/uploads/2017/06/Screen-Shot-2017-06-19-at-7.14.34-PM.png)


# 1. Codebase
A codebase is any single repo or any set of repos who share a root commit.There is only one codebase per app, but there will be many deploys of the app. A deploy is a running instance of the app.
# 2. Dependencies
It declares all dependencies, completely and exactly, via a dependency declaration manifest. Furthermore, it uses a dependency isolation tool during execution to ensure that no implicit dependencies “leak in” from the surrounding system. The full and explicit dependency specification is applied uniformly to both production and development.

# 3. Config
Apps sometimes store config as constants in the code. This is a violation of twelve-factor, which requires strict separation of config from code. Config varies substantially across deploys, code does not. Store config in environment

# 4. Backing services
A backing service is any service the app consumes over the network as part of its normal operation. Examples include datastores, messaging/queueing systems, SMTP services for outbound email, and caching systems.

# 5. Build, release, run
The twelve factor app uses strict separation between the build, release, and run stages. For eg: it is impossible to make changes to the code at runtime, since there is no way to propagate those changes back to the build stage.
# 6. Processes
The app is executed in the execution environment as one or more processes.Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.
# 7. Port binding
Self-contained services should make themselves available to other services by specified ports. This will help in enhancing the security by keeping unneccesory ports close.
# 8. Concurrency
Small, defined apps allow scaling out as needed to handle the varying loads. Break your app into much smaller pieces and then look for services out there that you either have to write or can consume.
# 9. Disposability
Make sure changes can take effect very quickly. It’s about making sure you can start up and take down fast. And that you can handle a crash.

# 10. Dev/prod parity
Development, staging and production should be as similar as possible. Continuous deployment needs continuous integration based on matching environments to limit deviation and errors. If you keep dev, staging and production as similar as possible, anyone can understand it and release it. This is of course simply good development but it also enables a lot more scalability.

# 11. Logs
our app only worries about creating a sort of event stream. Then, depending on the configuration, you can decide where that log will publish.
# 12. Admin processes
Your admin tools ship with the product. Pryzby warns us to not go messing with the database. Instead, use the tooling you built alongside your app to go and check the database. This also means that the privileges are the same across your system — no more special cases that put your security at risk.