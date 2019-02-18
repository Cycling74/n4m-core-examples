# Using dicts

This example shows how to interact with `dicts` in Node For Max. You can receive a `dict` via the inlet of `[node.script]` as shown in [03-message-types](../03-message-types) or send a dict to Max using the `outlet` function of the API as shown in [04-outlet-methods](../04-outlet-methods). Apart from that the API offers three additional methods:

* `getDict` to request the content of a dict from Max
* `setDict` to set or overwrite the content of a dict in Max
* `updateDict` to partially update the content of a dict in Max given a `path` and `value`
