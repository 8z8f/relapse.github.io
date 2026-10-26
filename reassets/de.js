(function () {
      if (!document.getElementById('docsSearch')) return;

      var data = {
        closures: {
          title: 'Closures',
          desc: 'Inspect, create, classify, hook and restore Luau closures.',
          fns: [
            ['checkcaller', 'Returns whether the current thread was created by the executor.', 'function checkcaller(): boolean', 'A boolean indicating whether the current thread is executor-created.'],
            ['clonefunction', 'Clones a Luau function, optionally with a new environment.', 'function clonefunction(func: (...any) -> (...any), env?: { [any]: any }): (...any) -> (...any)', 'A cloned Luau function.'],
            ['getfunctionhash', 'Returns a hash of a function\'s bytecode.', 'function getfunctionhash(func: (...any) -> (...any)): string', 'A string hash of the function bytecode.'],
            ['hookfunction', 'Replaces a function with a hook and returns the original. Aliases: hookfunc, replaceclosure.', 'function hookfunction(original: (...any) -> (...any), hook: (...any) -> (...any)): (...any) -> (...any)', 'The original function.'],
            ['hookmetamethod', 'Hooks a metamethod on an object and returns the original.', 'function hookmetamethod(object: any, method: string, hook: (...any) -> (...any)): (...any) -> (...any)', 'The original metamethod.'],
            ['iscclosure', 'Returns whether the value is a C closure.', 'function iscclosure(value: any): boolean', 'A boolean indicating whether the value is a C closure.'],
            ['isexecutorclosure', 'Returns whether the closure was created by the executor. Aliases: checkclosure, isourclosure.', 'function isexecutorclosure(func: (...any) -> (...any)): boolean', 'A boolean indicating whether the closure is executor-owned.'],
            ['isfunctionhooked', 'Returns whether a function currently has an active hook.', 'function isfunctionhooked(func: (...any) -> (...any)): boolean', 'A boolean indicating whether the function is hooked.'],
            ['islclosure', 'Returns whether the value is a Luau closure.', 'function islclosure(value: any): boolean', 'A boolean indicating whether the value is a Luau closure.'],
            ['loadstring', 'Compiles a string into a Luau chunk.', 'function loadstring(source: string, chunkname?: string): ((...any) -> (...any))?, string?', 'The compiled chunk, or nil and an error message.'],
            ['newcclosure', 'Wraps a Luau function as a C closure.', 'function newcclosure(func: (...any) -> (...any)): (...any) -> (...any)', 'A new C closure wrapping the given function.'],
            ['restorefunction', 'Restores a hooked function to its original. Alias: restorefunc.', 'function restorefunction(func: (...any) -> (...any)): ()', 'Nothing.'],
          ]
        },
        debug: {
          title: 'Debug',
          desc: 'Inspect and modify constants, upvalues, stacks and prototypes.',
          fns: [
            ['debug.getconstant', 'Retrieves one constant from a function or stack level.', 'function debug.getconstant(func: (...any) -> (...any) | number, index: number): number | string | boolean | nil', 'The selected constant, or nil.'],
            ['debug.getconstants', 'Retrieves all bytecode constants from a function or stack level.', 'function debug.getconstants(func: (...any) -> (...any) | number): { number | string | boolean }', 'A table of constants.'],
            ['debug.getinfo', 'Returns information about a function or stack level.', 'function debug.getinfo(func: (...any) -> (...any) | number, options?: string): { [string]: any }', 'A table with the requested debug fields.'],
            ['debug.getproto', 'Retrieves one nested prototype.', 'function debug.getproto(func: (...any) -> (...any), index: number, active?: boolean): (...any) -> (...any)', 'The selected prototype.'],
            ['debug.getprotos', 'Retrieves all nested function prototypes.', 'function debug.getprotos(func: (...any) -> (...any)): { (...any) -> (...any) }', 'A table of prototypes.'],
            ['debug.getstack', 'Retrieves a value from a given stack index.', 'function debug.getstack(level: number, index: number): any', 'The value at the given stack index.'],
            ['debug.getupvalue', 'Retrieves one upvalue from a function.', 'function debug.getupvalue(func: (...any) -> (...any), index: number): any', 'The upvalue at the given index.'],
            ['debug.getupvalues', 'Retrieves all upvalues from a function.', 'function debug.getupvalues(func: (...any) -> (...any)): { any }', 'A table of upvalues.'],
            ['debug.setconstant', 'Sets a constant in a function or stack level.', 'function debug.setconstant(func: (...any) -> (...any) | number, index: number, value: any): ()', 'Nothing.'],
            ['debug.setstack', 'Sets a value at a given stack index.', 'function debug.setstack(level: number, index: number, value: any): ()', 'Nothing.'],
            ['debug.setupvalue', 'Sets an upvalue in a function.', 'function debug.setupvalue(func: (...any) -> (...any), index: number, value: any): ()', 'Nothing.'],
          ]
        },
        drawing: {
          title: 'Drawing',
          desc: 'Create and manage client-only 2D drawing objects.',
          fns: [
            ['Drawing.new', 'Creates a new 2D drawing object by class name.', 'function Drawing.new(className: string): Drawing', 'A drawing object.'],
            ['The Drawing object', 'A drawing object with readable and writable properties. Call Destroy or Remove to remove it.', 'type Drawing = { Destroy: () -> (), Remove: () -> (), [string]: any }', 'A drawing object.'],
            ['cleardrawcache', 'Clears the internal cache of drawing objects.', 'function cleardrawcache(): ()', 'Nothing.'],
            ['getrenderproperty', 'Returns a property from a drawing object.', 'function getrenderproperty(object: any, property: string): any', 'The requested property value.'],
            ['isrenderobj', 'Returns whether the value is a drawing object.', 'function isrenderobj(value: any): boolean', 'A boolean indicating whether the value is a drawing object.'],
            ['setrenderproperty', 'Sets a property on a drawing object.', 'function setrenderproperty(object: any, property: string, value: any): ()', 'Nothing.'],
          ]
        },
        encoding: {
          title: 'Encoding',
          desc: 'Encode Base64 data and compress or decompress LZ4 data.',
          fns: [
            ['base64decode', 'Decodes a Base64 string back to its original data. Aliases: base64_decode, base64.decode.', 'function base64decode(data: string): string', 'The decoded data.'],
            ['base64encode', 'Encodes data into a Base64 string. Aliases: base64_encode, base64.encode.', 'function base64encode(data: string): string', 'The encoded Base64 string.'],
            ['crypt.generatebytes', 'Returns Base64-encoded random bytes. Defaults to 32 bytes.', 'function crypt.generatebytes(length?: number): string', 'A Base64 string of random bytes.'],
            ['crypt.generatekey', 'Returns a Base64-encoded 32 byte random key.', 'function crypt.generatekey(): string', 'A Base64 key.'],
            ['crypt.hash', 'Hashes data with the given digest algorithm and returns hex.', 'function crypt.hash(data: string, algorithm: string): string', 'A hexadecimal digest.'],
            ['crypt.encrypt', 'Encrypts data with AES and returns Base64 ciphertext, plus the IV when the mode uses one.', 'function crypt.encrypt(data: string, key: string, iv?: string, mode?: string): string, string?', 'The Base64 ciphertext and optional Base64 IV.'],
            ['crypt.decrypt', 'Decrypts Base64 ciphertext produced by crypt.encrypt.', 'function crypt.decrypt(ciphertext: string, key: string, iv?: string, mode?: string): string', 'The decrypted data.'],
            ['crypt.hmac', 'Returns an HMAC for data. The algorithm defaults to sha256 and the format defaults to hex.', 'function crypt.hmac(data: string, key: string, algorithm?: string, format?: string): string', 'The HMAC in the requested format.'],
            ['crypt.random', 'Returns the requested number of random bytes.', 'function crypt.random(count: number): string', 'A string of random bytes.'],
            ['lz4compress', 'Compresses data using the LZ4 algorithm.', 'function lz4compress(data: string): string', 'The LZ4-compressed data.'],
            ['lz4decompress', 'Decompresses LZ4-compressed data.', 'function lz4decompress(data: string): string', 'The decompressed data.'],
          ]
        },
        environment: {
          title: 'Environment',
          desc: 'Inspect executor environments, the registry and garbage-collected values.',
          fns: [
            ['getgc', 'Returns a table of garbage-collected objects. Functions and userdata are always included. Pass true to include tables.', 'function getgc(includeTables?: boolean): { any }', 'A table of garbage-collected objects.'],
            ['getgcheapstats', 'Returns heap statistics for the Lua garbage collector.', 'function getgcheapstats(): { [string]: any }', 'A table with byte counts, object counts and per bucket statistics.'],
            ['getgenv', 'Returns the executor\'s shared global environment table.', 'function getgenv(): { [any]: any }', 'The executor global environment table.'],
            ['getreg', 'Returns the Luau registry table.', 'function getreg(): { [any]: any }', 'The Luau registry table.'],
            ['getrenv', 'Returns the Roblox global environment table.', 'function getrenv(): { [any]: any }', 'The Roblox global environment table.'],
            ['filtergc', 'Searches the garbage collector with a filter table. Pass true as the third argument to return only the first match.', 'function filtergc(kind: string, filter: { [any]: any }, returnOne?: boolean): any', 'A list of matches, or a single match when returnOne is true.'],
          ]
        },
        filesystem: {
          title: 'Filesystem',
          desc: 'Read, write and organize files in the executor workspace.',
          fns: [
            ['appendfile', 'Appends data to the end of a file.', 'function appendfile(path: string, data: string): ()', 'Nothing.'],
            ['delfile', 'Deletes a file from the workspace.', 'function delfile(path: string): ()', 'Nothing.'],
            ['delfolder', 'Deletes a folder from the workspace.', 'function delfolder(path: string): ()', 'Nothing.'],
            ['getcustomasset', 'Returns a content URL for a workspace file. Alias: getsynasset.', 'function getcustomasset(path: string): string', 'A content URL for the file.'],
            ['isfile', 'Returns whether the path is a file.', 'function isfile(path: string): boolean', 'A boolean indicating whether the path is a file.'],
            ['isfolder', 'Returns whether the path is a folder.', 'function isfolder(path: string): boolean', 'A boolean indicating whether the path is a folder.'],
            ['listfiles', 'Lists files and folders inside a directory.', 'function listfiles(path?: string): { string }', 'A table of paths.'],
            ['loadfile', 'Loads a Luau chunk from a file.', 'function loadfile(path: string): ((...any) -> (...any))?, string?', 'The compiled chunk, or nil and an error message.'],
            ['makefolder', 'Creates a new folder in the workspace.', 'function makefolder(path: string): ()', 'Nothing.'],
            ['readfile', 'Reads the contents of a file.', 'function readfile(path: string): string', 'The contents of the file.'],
            ['writefile', 'Writes data to a file, overwriting it.', 'function writefile(path: string, data: string): ()', 'Nothing.'],
          ]
        },
        instances: {
          title: 'Instances',
          desc: 'Enumerate, reference, inspect and interact with Roblox Instances.',
          fns: [
            ['GetObjects', 'Loads a local asset by id through InsertService. Alias: getobjects.', 'function GetObjects(assetId: string): { Instance }', 'A table containing the loaded asset.'],
            ['cloneref', 'Returns a new reference to an Instance. Alias: clonereference.', 'function cloneref(instance: Instance): Instance', 'A new reference to the instance.'],
            ['compareinstances', 'Compares two Instances for equality by pointer.', 'function compareinstances(a: Instance, b: Instance): boolean', 'A boolean indicating whether both instances point to the same object.'],
            ['fireclickdetector', 'Fires a ClickDetector\'s click event.', 'function fireclickdetector(detector: ClickDetector, distance?: number, event?: string): ()', 'Nothing.'],
            ['fireproximityprompt', 'Triggers a ProximityPrompt.', 'function fireproximityprompt(prompt: ProximityPrompt): ()', 'Nothing.'],
            ['firetouchinterest', 'Fires a touch interest between two parts.', 'function firetouchinterest(part: BasePart, target: BasePart, toggle: boolean | number): ()', 'Nothing.'],
            ['getcallbackvalue', 'Returns the callback bound to a property. Alias: getcallbackmember.', 'function getcallbackvalue(object: any, property: string): (...any) -> (...any)', 'The callback bound to the property.'],
            ['gethui', 'Returns the executor\'s hidden UI container. Alias: get_hidden_gui.', 'function gethui(): Instance', 'The hidden UI container.'],
            ['getinstances', 'Returns every Instance currently in memory.', 'function getinstances(): { Instance }', 'A table of Instances.'],
            ['getnilinstances', 'Returns every parentless Instance in memory.', 'function getnilinstances(): { Instance }', 'A table of parentless Instances.'],
            ['isnetworkowner', 'Returns whether the local client owns the part\'s network physics. Alias: is_network_owner.', 'function isnetworkowner(part: BasePart): boolean', 'A boolean indicating whether the client is the network owner.'],
            ['cache.invalidate', 'Removes an Instance from the instance cache.', 'function cache.invalidate(instance: Instance): ()', 'Nothing.'],
            ['cache.iscached', 'Returns whether an Instance is present in the instance cache.', 'function cache.iscached(instance: Instance): boolean', 'A boolean indicating whether the instance is cached.'],
            ['cache.replace', 'Replaces the cached reference for an Instance.', 'function cache.replace(instance: Instance, replacement: Instance): ()', 'Nothing.'],
          ]
        },
        metatable: {
          title: 'Metatable',
          desc: 'Access, replace and inspect protected metatables.',
          fns: [
            ['getnamecallmethod', 'Returns the current __namecall method name.', 'function getnamecallmethod(): string', 'The current namecall method.'],
            ['getrawmetatable', 'Returns an object\'s metatable, bypassing __metatable.', 'function getrawmetatable(object: any): { [any]: any }', 'The raw metatable.'],
            ['isreadonly', 'Returns whether a table is marked read-only.', 'function isreadonly(table: { [any]: any }): boolean', 'A boolean indicating whether the table is read-only.'],
            ['makereadonly', 'Marks a table as read-only.', 'function makereadonly(table: { [any]: any }): ()', 'Nothing.'],
            ['makewritable', 'Marks a table as writable. Alias: makewriteable.', 'function makewritable(table: { [any]: any }): ()', 'Nothing.'],
            ['setnamecallmethod', 'Sets the current __namecall method name.', 'function setnamecallmethod(method: string): ()', 'Nothing.'],
            ['setrawmetatable', 'Replaces an object\'s metatable directly.', 'function setrawmetatable(object: any, metatable: { [any]: any }): ()', 'Nothing.'],
            ['setreadonly', 'Marks a table as read-only or writable.', 'function setreadonly(table: { [any]: any }, readonly: boolean): ()', 'Nothing.'],
          ]
        },
        miscellaneous: {
          title: 'Miscellaneous',
          desc: 'Utility functions that don\'t belong to a specific category.',
          fns: [
            ['getfpscap', 'Returns the current frame rate cap. A value of 0 means the cap is disabled.', 'function getfpscap(): number', 'The current frame rate cap.'],
            ['identifyexecutor', 'Returns the executor\'s name and version. Alias: getexecutorname.', 'function identifyexecutor(): string, string', 'The executor name and version.'],
            ['queue_on_teleport', 'Queues a script to run after the next teleport to the current place. Alias: queueonteleport.', 'function queue_on_teleport(source: string): ()', 'Nothing.'],
            ['request', 'Sends an HTTP request from the executor and yields until it completes.', 'function request(options: { [any]: any }): { [any]: any }', 'A response table with Success, StatusCode, StatusMessage, Body, Headers and Cookies.'],
            ['setclipboard', 'Copies text to the system clipboard. Aliases: toclipboard, setrbxclipboard.', 'function setclipboard(text: string): ()', 'Nothing.'],
            ['setfpscap', 'Sets the frame rate cap. Use 0 to disable the cap.', 'function setfpscap(fps: number): ()', 'Nothing.'],
            ['settimescale', 'Sets the engine\'s secondsPerStep to speed up physics locally.', 'function settimescale(scale: number): ()', 'Nothing.'],
          ]
        },
        reflection: {
          title: 'Reflection',
          desc: 'Reflect on functions, types and runtime state.',
          fns: [
            ['gethiddenproperty', 'Reads a hidden property from an Instance.', 'function gethiddenproperty(instance: Instance, property: string): any, boolean', 'The property value and whether it is hidden.'],
            ['getproperties', 'Returns the names of every property on an Instance.', 'function getproperties(instance: Instance): { string }', 'A table of property names.'],
            ['getthreadidentity', 'Returns the current thread\'s identity level. Aliases: getidentity, get_thread_identity, getthreadcontext.', 'function getthreadidentity(): number', 'The current thread identity level.'],
            ['isscriptable', 'Returns whether a property is scriptable.', 'function isscriptable(instance: Instance, property: string): boolean', 'A boolean indicating whether the property is scriptable.'],
            ['sethiddenproperty', 'Writes a hidden property on an Instance.', 'function sethiddenproperty(instance: Instance, property: string, value: any): boolean', 'A boolean indicating whether the property was hidden.'],
            ['setscriptable', 'Toggles the scriptable flag on a property.', 'function setscriptable(instance: Instance, property: string, scriptable: boolean): ()', 'The previous scriptable state.'],
            ['setthreadidentity', 'Sets the current thread\'s identity level. Aliases: setidentity, set_thread_identity, setthreadcontext.', 'function setthreadidentity(identity: number): ()', 'Nothing.'],
          ]
        },
        scripts: {
          title: 'Scripts',
          desc: 'Manage, load and inspect running scripts.',
          fns: [
            ['decompile', 'Decompiles a script and returns its source.', 'function decompile(script: Instance): string', 'The decompiled source.'],
            ['dumpstring', 'Returns a script\'s compiled bytecode. Alias: getscriptbytecode.', 'function dumpstring(script: Instance): string', 'The compiled bytecode.'],
            ['getcallingscript', 'Returns the script that called the current thread.', 'function getcallingscript(): Instance', 'The calling script.'],
            ['getloadedmodules', 'Returns all currently loaded ModuleScripts.', 'function getloadedmodules(): { Instance }', 'A table of loaded ModuleScripts.'],
            ['getmenv', 'Returns a script\'s local environment table. Alias: getsenv.', 'function getmenv(script: Instance): { [any]: any }', 'The script\'s local environment.'],
            ['getrunningscripts', 'Returns all currently running scripts.', 'function getrunningscripts(): { Instance }', 'A table of running scripts.'],
            ['getscriptbytecode', 'Returns a script\'s compiled bytecode. Alias: dumpstring.', 'function getscriptbytecode(script: Instance): string', 'The compiled bytecode.'],
            ['getscriptclosure', 'Returns a script\'s main closure. Alias: getscriptfunction.', 'function getscriptclosure(script: Instance): (...any) -> (...any)', 'The main closure of the script.'],
            ['getscriptfromthread', 'Returns the script a thread belongs to.', 'function getscriptfromthread(thread: thread): Instance', 'The script belonging to the thread.'],
            ['getscripthash', 'Returns a hash of a script\'s bytecode.', 'function getscripthash(script: Instance): string', 'A string hash of the script bytecode.'],
            ['getscripts', 'Returns every script currently in memory.', 'function getscripts(): { Instance }', 'A table of scripts.'],
            ['getsenv', 'Returns a script\'s local environment table. Alias: getmenv.', 'function getsenv(script: Instance): { [any]: any }', 'The script\'s local environment.'],
          ]
        },
        signals: {
          title: 'Signals',
          desc: 'Hook and inspect Roblox signals and event connections.',
          fns: [
            ['The Connection object', 'A live connection to a signal, with fields for the callback and state.', 'type Connection = { Enabled: boolean, Function: (...any) -> (...any), ... }', 'A connection object.'],
            ['cansignalreplicate', 'Returns whether a signal can replicate from the client.', 'function cansignalreplicate(signal: RBXScriptSignal): boolean', 'A boolean indicating whether the signal can replicate.'],
            ['firesignal', 'Fires a signal and runs its connected callbacks.', 'function firesignal(signal: RBXScriptSignal, ...: any): ()', 'Nothing.'],
            ['getconnection', 'Returns every connection attached to a signal. Alias: getconnections.', 'function getconnection(signal: RBXScriptSignal): { Connection }', 'A table of connections.'],
            ['getconnections', 'Returns every connection attached to a signal. Alias: getconnection.', 'function getconnections(signal: RBXScriptSignal): { Connection }', 'A table of connections.'],
            ['getsignalarguments', 'Returns the argument type names for a signal.', 'function getsignalarguments(signal: RBXScriptSignal): { string }', 'A table of type names.'],
            ['getsignalargumentsinfo', 'Returns the argument names and types for a signal.', 'function getsignalargumentsinfo(signal: RBXScriptSignal): { { Name: string, Type: string } }', 'A table of argument descriptions.'],
            ['getsignalwhitelist', 'Returns every signal that can replicate from the client.', 'function getsignalwhitelist(): { { Event: string, Parent: string } }', 'A table of signals with their parent class names.'],
            ['replicatesignal', 'Fires a signal and replicates it to the server.', 'function replicatesignal(signal: RBXScriptSignal, ...: any): ()', 'Nothing.'],
          ]
        },
        websocket: {
          title: 'WebSocket',
          desc: 'Open, send and receive data over WebSocket connections.',
          fns: [
            ['WebSocket.connect', 'Opens a WebSocket connection. The url must start with ws:// or wss://. Alias: websocket.connect.', 'function WebSocket.connect(url: string): WebSocket', 'A WebSocket object.'],
            ['The WebSocket object', 'A socket with Send, Close, OnMessage and OnClose.', 'type WebSocket = { Send: (string) -> (), Close: () -> (), OnMessage: RBXScriptSignal, OnClose: RBXScriptSignal }', 'A WebSocket object.'],
            ['WebSocket:Send', 'Sends a text message over the socket.', 'function WebSocket:Send(data: string): ()', 'Nothing.'],
            ['WebSocket:Close', 'Closes the socket.', 'function WebSocket:Close(): ()', 'Nothing.'],
          ]
        },
        actors: {
          title: 'Actors',
          desc: 'Run code inside Actor VMs and communicate with them.',
          fns: [
            ['getactors', 'Returns every Actor that currently has a running Lua VM. Alias: get_actors.', 'function getactors(): { Actor }', 'A table of Actors.'],
            ['run_on_actor', 'Compiles and runs source inside an Actor VM, passing extra arguments to the script.', 'function run_on_actor(actor: Actor, source: string, ...: any): ()', 'Nothing.'],
            ['isparallel', 'Returns whether the current thread belongs to an Actor. Aliases: is_parallel, checkparallel.', 'function isparallel(): boolean', 'A boolean indicating whether the thread is parallel.'],
            ['create_comm_channel', 'Creates a BindableEvent for communication with other VMs and returns its id and the event.', 'function create_comm_channel(): number, BindableEvent', 'The channel id and the BindableEvent.'],
            ['get_comm_channel', 'Returns the BindableEvent for a communication channel id, or nil.', 'function get_comm_channel(id: number): BindableEvent?', 'The BindableEvent or nil.'],
          ]
        },
        channel: {
          title: 'Channel',
          desc: 'Open cross-VM channels and exchange JSON values.',
          fns: [
            ['RelapseChannel.new', 'Opens a named channel. Names must be 1 to 255 UTF-8 bytes and cannot start with @. Alias: Channel.new.', 'function RelapseChannel.new(name: string): Channel', 'A Channel object.'],
            ['The Channel object', 'A channel with Name, Connected, IsPublished, Close and DisconnectAll.', 'type Channel = { Name: string, Connected: RBXScriptSignal, IsPublished: boolean, Close: () -> (), DisconnectAll: () -> () }', 'A Channel object.'],
            ['Channel:Close', 'Closes the channel and destroys its signals.', 'function Channel:Close(): ()', 'Nothing.'],
            ['Channel:DisconnectAll', 'Disconnects every peer from the channel.', 'function Channel:DisconnectAll(): ()', 'Nothing.'],
            ['The Channel connection object', 'A connection to a channel with Id, Connected, Send and Close. Signals: MessageReceived, Disconnected.', 'type ChannelConnection = { Id: number, Connected: boolean, Send: (any) -> (), Close: () -> () }', 'A ChannelConnection object.'],
            ['ChannelConnection:Send', 'Sends one JSON value to the peer.', 'function ChannelConnection:Send(value: any): ()', 'Nothing.'],
            ['ChannelConnection:Close', 'Closes the connection.', 'function ChannelConnection:Close(): ()', 'Nothing.'],
          ]
        },
        fflags: {
          title: 'FFlags',
          desc: 'Read and write engine fast flags.',
          fns: [
            ['getfflag', 'Returns the current value of a fast flag as a string, or nil when the flag does not exist.', 'function getfflag(name: string): string?', 'The flag value or nil.'],
            ['setfflag', 'Sets a fast flag to a boolean, number or string value.', 'function setfflag(name: string, value: boolean | number | string): boolean', 'A boolean indicating whether the flag was updated.'],
            ['fflag_list', 'Returns every fast flag that could be read from the engine.', 'function fflag_list(): { { name: string, type: string, value: string } }', 'A table of flag entries.'],
          ]
        },
        http: {
          title: 'HTTP',
          desc: 'Send HTTP requests from the executor.',
          fns: [
            ['HttpGet', 'Sends a GET request and returns the response body. Yields until it completes.', 'function HttpGet(url: string): string', 'The response body.'],
            ['http.request', 'Sends an HTTP request and yields until it completes. Aliases: request, http_request.', 'function http.request(options: { [any]: any }): { [any]: any }', 'A response table with Success, StatusCode, StatusMessage, Body, Headers and Cookies.'],
          ]
        },
        input: {
          title: 'Input',
          desc: 'Synthesize mouse and keyboard input.',
          fns: [
            ['mouse1click', 'Clicks the left mouse button.', 'function mouse1click(): ()', 'Nothing.'],
            ['mouse1press', 'Presses the left mouse button.', 'function mouse1press(): ()', 'Nothing.'],
            ['mouse1release', 'Releases the left mouse button.', 'function mouse1release(): ()', 'Nothing.'],
            ['mouse2click', 'Clicks the right mouse button.', 'function mouse2click(): ()', 'Nothing.'],
            ['mouse2press', 'Presses the right mouse button.', 'function mouse2press(): ()', 'Nothing.'],
            ['mouse2release', 'Releases the right mouse button.', 'function mouse2release(): ()', 'Nothing.'],
            ['mousemoveabs', 'Moves the cursor to an absolute screen position. Alias: movemouseabs.', 'function mousemoveabs(x: number, y: number): ()', 'Nothing.'],
            ['mousemoverel', 'Moves the cursor by a relative amount. Alias: movemouserel.', 'function mousemoverel(x: number, y: number): ()', 'Nothing.'],
            ['mousescroll', 'Scrolls the mouse wheel by the given number of notches.', 'function mousescroll(notches: number): ()', 'Nothing.'],
            ['keypress', 'Presses a key by key code or KeyCode value.', 'function keypress(key: number | KeyCode): ()', 'Nothing.'],
            ['keyrelease', 'Releases a key by key code or KeyCode value.', 'function keyrelease(key: number | KeyCode): ()', 'Nothing.'],
            ['keyclick', 'Presses and releases a key by key code or KeyCode value.', 'function keyclick(key: number | KeyCode): ()', 'Nothing.'],
            ['isrbxactive', 'Returns whether the Roblox window is focused. Aliases: isgameactive, iswindowactive.', 'function isrbxactive(): boolean', 'A boolean indicating whether the window is active.'],
          ]
        },
        messagebox: {
          title: 'MessageBox',
          desc: 'Show native message boxes.',
          fns: [
            ['messagebox', 'Shows a native message box and yields until a button is pressed.', 'function messagebox(text: string, caption?: string, flags?: number): number', 'The id of the button that was pressed.'],
          ]
        },
        oth: {
          title: 'Oth',
          desc: 'Hook C closures with Lua functions and inspect hook threads.',
          fns: [
            ['oth.hook', 'Hooks a C closure with a Lua function and returns the hooked closure.', 'function oth.hook(target: (...any) -> (...any), hook: (...any) -> (...any)): (...any) -> (...any)', 'The hooked closure.'],
            ['oth.unhook', 'Removes the hook from a closure.', 'function oth.unhook(target: (...any) -> (...any)): boolean', 'A boolean indicating whether a hook was removed.'],
            ['oth.get_root_callback', 'Returns the root callback for the current hook thread, or nil.', 'function oth.get_root_callback(): (...any) -> (...any)?', 'The root callback or nil.'],
            ['oth.is_hook_thread', 'Returns whether the current thread was created by oth.', 'function oth.is_hook_thread(): boolean', 'A boolean indicating whether this is a hook thread.'],
            ['get_original_thread', 'Returns the thread that created the current hook thread, or nil.', 'function get_original_thread(): thread?', 'The original thread or nil.'],
          ]
        },
        physics: {
          title: 'Physics',
          desc: 'Read and change the local physics time scale.',
          fns: [
            ['gettimescale', 'Returns the current local physics time scale.', 'function gettimescale(): number', 'The current time scale.'],
            ['settimescale', 'Sets the local physics time scale.', 'function settimescale(scale: number): ()', 'Nothing.'],
          ]
        },
        raknet: {
          title: 'RakNet',
          desc: 'Inspect and inject network packets.',
          fns: [
            ['raknet.add_receive_hook', 'Registers a callback for incoming packets and returns its id.', 'function raknet.add_receive_hook(callback: (packet: RakNetPacket) -> ()): number', 'The hook id.'],
            ['raknet.add_send_hook', 'Registers a callback for outgoing packets and returns its id.', 'function raknet.add_send_hook(callback: (packet: RakNetPacket) -> ()): number', 'The hook id.'],
            ['raknet.remove_receive_hook', 'Removes an incoming packet hook by id.', 'function raknet.remove_receive_hook(id: number): boolean', 'A boolean indicating whether the hook was removed.'],
            ['raknet.remove_send_hook', 'Removes an outgoing packet hook by id.', 'function raknet.remove_send_hook(id: number): boolean', 'A boolean indicating whether the hook was removed.'],
            ['raknet.send', 'Sends raw bytes as one packet. Returns false when there is nothing to send.', 'function raknet.send(data: string | buffer | { number }): boolean', 'A boolean indicating whether the packet was sent.'],
            ['raknet.receive', 'Delivers raw bytes to the client as one incoming packet.', 'function raknet.receive(data: string): boolean', 'A boolean indicating whether the packet was delivered.'],
            ['raknet.is_enabled', 'Returns whether RakNet transport hooks are enabled.', 'function raknet.is_enabled(): boolean', 'A boolean indicating whether transport hooks are enabled.'],
            ['raknet.diagnostics', 'Returns transport state and hook slot diagnostics.', 'function raknet.diagnostics(): { [string]: any }', 'A table of diagnostics.'],
            ['The RakNetPacket object', 'A packet with data, direction, length, PacketId, ItemId, Priority, Reliability, Channel, Broadcast, Receipt, AsBuffer and AsArray.', 'type RakNetPacket = { data: string, direction: string, ... }', 'A packet object.'],
            ['RakNetPacket:Block', 'Blocks the packet so it is not sent.', 'function RakNetPacket:Block(): RakNetPacket', 'The packet.'],
            ['RakNetPacket:SetData', 'Replaces the packet data with a string, buffer or byte array.', 'function RakNetPacket:SetData(data: string | buffer | { number }): RakNetPacket', 'The packet.'],
          ]
        },
        signal: {
          title: 'Signal',
          desc: 'Create standalone signals and connections.',
          fns: [
            ['RelapseSignal.new', 'Creates a new signal. Alias: Signal.new.', 'function RelapseSignal.new(): Signal', 'A Signal object.'],
            ['The Signal object', 'A signal with Connect, Once, Fire, Wait and Destroy.', 'type Signal = { Connect: (callback: (...any) -> (...any)) -> Connection, Once: (callback: (...any) -> (...any)) -> Connection, Fire: (...any) -> (), Wait: () -> (...any), Destroy: () -> () }', 'A Signal object.'],
            ['Signal:Connect', 'Connects a callback to the signal and returns a connection.', 'function Signal:Connect(callback: (...any) -> (...any)): Connection', 'A Connection object.'],
            ['Signal:Once', 'Connects a callback that runs once.', 'function Signal:Once(callback: (...any) -> (...any)): Connection', 'A Connection object.'],
            ['Signal:Fire', 'Fires the signal and runs its callbacks.', 'function Signal:Fire(...: any): ()', 'Nothing.'],
            ['Signal:Wait', 'Yields until the signal fires and returns its arguments.', 'function Signal:Wait(): ...any', 'The arguments passed to the signal.'],
            ['Signal:Destroy', 'Destroys the signal and resumes waiting threads.', 'function Signal:Destroy(): ()', 'Nothing.'],
            ['Connection:Disconnect', 'Disconnects a connection from its signal.', 'function Connection:Disconnect(): ()', 'Nothing.'],
          ]
        }
      };

      var categoryOrder = ['closures','debug','drawing','encoding','environment','filesystem','instances','metatable','miscellaneous','reflection','scripts','signals','websocket','actors','channel','fflags','http','input','messagebox','oth','physics','raknet','signal'];
      var flat = [];
      categoryOrder.forEach(function (cat) {
        data[cat].fns.forEach(function (fn) {
          flat.push({ cat: cat, catTitle: data[cat].title, name: fn[0], desc: fn[1], sig: fn[2], ret: fn[3] });
        });
      });

      var links = document.querySelectorAll('.docs-side-link');
      var sections = document.querySelectorAll('.docs-section');
      var searchInput = document.getElementById('docsSearch');
      var resultsBox = document.getElementById('docsResults');
      var copyBtn = document.querySelector('.docs-copy');

      function slug(name) {
        return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }

      Object.keys(data).forEach(function (cat) {
        var host = document.querySelector('.docs-functions[data-category="' + cat + '"]');
        if (!host) return;
        data[cat].fns.forEach(function (fn) {
          var a = document.createElement('a');
          a.className = 'docs-fn';
          a.href = '#' + slug(fn[0]);
          a.dataset.fn = fn[0];
          a.dataset.cat = cat;
          a.innerHTML = '<span class="docs-fn-name">' + fn[0] + '</span>' +
                        '<span class="docs-fn-desc">' + fn[1] + '</span>' +
                        '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';
          a.addEventListener('click', function (e) {
            e.preventDefault();
            openFn(fn[0], cat);
          });
          host.appendChild(a);
        });
      });

      function show(id, push) {
        sections.forEach(function (s) {
          s.classList.toggle('active', s.id === id);
        });
        links.forEach(function (l) {
          l.classList.toggle('current', l.dataset.doc === id);
        });
        if (push) history.replaceState(null, '', '#' + id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function openFn(name, cat) {
        var idx = flat.findIndex(function (f) { return f.name === name && f.cat === cat; });
        if (idx === -1) return;
        var item = flat[idx];

        document.getElementById('fnBreadcrumb').innerHTML =
          '<span>' + item.catTitle + '</span><span class="sep">/</span><span>' + item.name + '</span>';
        document.getElementById('fnCategory').textContent = item.catTitle;
        document.getElementById('fnTitle').textContent = item.name;
        document.getElementById('fnDesc').textContent = item.desc;
        document.getElementById('fnSignature').textContent = item.sig;
        document.getElementById('fnReturns').textContent = item.ret;

        copyBtn.dataset.copy = item.sig;
        copyBtn.classList.remove('copied');
        copyBtn.querySelector('span').textContent = 'Copy';

        var prev = flat[idx - 1];
        var next = flat[idx + 1];
        var prevEl = document.getElementById('fnPrev');
        var nextEl = document.getElementById('fnNext');

        if (prev) {
          prevEl.style.visibility = 'visible';
          document.getElementById('fnPrevTitle').textContent = prev.name;
          prevEl.onclick = function (e) { e.preventDefault(); openFn(prev.name, prev.cat); };
        } else {
          prevEl.style.visibility = 'hidden';
        }

        if (next) {
          nextEl.style.visibility = 'visible';
          document.getElementById('fnNextTitle').textContent = next.name;
          nextEl.onclick = function (e) { e.preventDefault(); openFn(next.name, next.cat); };
        } else {
          nextEl.style.visibility = 'hidden';
        }

        sections.forEach(function (s) {
          s.classList.toggle('active', s.id === 'function-view');
        });
        links.forEach(function (l) {
          l.classList.toggle('current', l.dataset.doc === cat);
        });
        history.replaceState(null, '', '#' + slug(name));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      copyBtn.addEventListener('click', function () {
        var text = copyBtn.dataset.copy || '';
        if (!text) return;
        navigator.clipboard.writeText(text).then(function () {
          copyBtn.classList.add('copied');
          copyBtn.querySelector('span').textContent = 'Copied';
          setTimeout(function () {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('span').textContent = 'Copy';
          }, 1400);
        });
      });

      function escapeHtml(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      links.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          show(link.dataset.doc, true);
        });
      });

      function buildIndex() {
        var index = [];
        sections.forEach(function (sec) {
          if (sec.id === 'function-view') return;
          var titleEl = sec.querySelector('.docs-title, .docs-title-sm');
          var leadEl = sec.querySelector('.docs-lead');
          if (!titleEl) return;
          index.push({ id: sec.id, title: titleEl.textContent.trim(), lead: leadEl ? leadEl.textContent.trim() : '', type: 'section' });
        });
        flat.forEach(function (f) {
          index.push({ id: f.cat, title: f.name, lead: f.desc, type: 'function', fn: f.name, cat: f.cat });
        });
        return index;
      }

      var index = buildIndex();

      function highlight(text, q) {
        if (!q) return text;
        var i = text.toLowerCase().indexOf(q.toLowerCase());
        if (i === -1) return text;
        return text.slice(0, i) + '<mark>' + text.slice(i, i + q.length) + '</mark>' + text.slice(i + q.length);
      }

      function renderResults(q) {
        if (!q) {
          resultsBox.classList.remove('on');
          resultsBox.innerHTML = '';
          return;
        }
        var query = q.toLowerCase();
        var matches = index.filter(function (item) {
          return item.title.toLowerCase().includes(query) || item.lead.toLowerCase().includes(query);
        });

        if (matches.length === 0) {
          resultsBox.innerHTML = '<div class="docs-result-none">No results for "' + escapeHtml(q) + '"</div>';
          resultsBox.classList.add('on');
          return;
        }

        var html = '<div class="docs-result-label">' + matches.length + ' result' + (matches.length === 1 ? '' : 's') + '</div>';
        matches.slice(0, 40).forEach(function (m) {
          html += '<a class="docs-result" data-target="' + m.id + '" data-fn="' + (m.fn || '') + '" data-cat="' + (m.cat || '') + '" href="#' + m.id + '">' +
                    '<span class="docs-result-title">' + highlight(m.title, q) + '</span>' +
                    '<span class="docs-result-type">' + m.type + '</span>' +
                  '</a>';
        });
        resultsBox.innerHTML = html;
        resultsBox.classList.add('on');

        resultsBox.querySelectorAll('.docs-result').forEach(function (r) {
          r.addEventListener('click', function (e) {
            e.preventDefault();
            if (r.dataset.fn) {
              openFn(r.dataset.fn, r.dataset.cat);
            } else {
              show(r.dataset.target, true);
            }
            searchInput.value = '';
            renderResults('');
          });
        });
      }

      searchInput.addEventListener('input', function () {
        renderResults(searchInput.value.trim());
      });

      document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          searchInput.focus();
          searchInput.select();
        }
        if (e.key === 'Escape' && document.activeElement === searchInput) {
          searchInput.blur();
          searchInput.value = '';
          renderResults('');
        }
      });

      var initial = location.hash ? location.hash.slice(1) : 'introduction';
      var slugMatch = flat.find(function (f) { return slug(f.name) === initial; });
      if (slugMatch) {
        openFn(slugMatch.name, slugMatch.cat);
      } else if (document.getElementById(initial)) {
        show(initial, false);
      } else {
        show('introduction', false);
      }
    })();
