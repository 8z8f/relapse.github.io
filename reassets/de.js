(function () {
      var data = {
        closures: {
          title: 'Closures',
          desc: 'Inspect, create, classify, hook and restore Luau closures.',
          fns: [
            ['checkcaller', 'Returns whether the current thread was created by the executor.', 'function checkcaller(): boolean', 'A boolean indicating whether the current thread is executor-created.'],
            ['clonefunction', 'Clones a Luau function, optionally with a new environment.', 'function clonefunction(func: (...any) -> (...any), env?: { [any]: any }): (...any) -> (...any)', 'A cloned Luau function.'],
            ['getfunctionhash', 'Returns a hash of a function\'s bytecode.', 'function getfunctionhash(func: (...any) -> (...any)): string', 'A string hash of the function bytecode.'],
            ['hookfunction', 'Replaces a function with a hook and returns the original.', 'function hookfunction(original: (...any) -> (...any), hook: (...any) -> (...any)): (...any) -> (...any)', 'The original function.'],
            ['hookmetamethod', 'Hooks a metamethod on an object and returns the original.', 'function hookmetamethod(object: any, method: string, hook: (...any) -> (...any)): (...any) -> (...any)', 'The original metamethod.'],
            ['iscclosure', 'Returns whether the value is a C closure.', 'function iscclosure(value: any): boolean', 'A boolean indicating whether the value is a C closure.'],
            ['isexecutorclosure', 'Returns whether the closure was created by the executor.', 'function isexecutorclosure(func: (...any) -> (...any)): boolean', 'A boolean indicating whether the closure is executor-owned.'],
            ['islclosure', 'Returns whether the value is a Luau closure.', 'function islclosure(value: any): boolean', 'A boolean indicating whether the value is a Luau closure.'],
            ['loadstring', 'Compiles a string into a Luau chunk.', 'function loadstring(source: string, chunkname?: string): ((...any) -> (...any))?, string?', 'The compiled chunk, or nil and an error message.'],
            ['newcclosure', 'Wraps a Luau function as a C closure.', 'function newcclosure(func: (...any) -> (...any)): (...any) -> (...any)', 'A new C closure wrapping the given function.'],
            ['restorefunction', 'Restores a hooked function to its original.', 'function restorefunction(func: (...any) -> (...any)): ()', 'Nothing.'],
          ]
        },
        debug: {
          title: 'Debug',
          desc: 'Inspect and modify constants, upvalues, stacks and prototypes.',
          fns: [
            ['debug.getconstant', 'Retrieves one constant from a function or stack level.', 'function debug.getconstant(func: (...any) -> (...any) | number, index: number): number | string | boolean | nil', 'The selected constant, or nil.'],
            ['debug.getconstants', 'Retrieves all bytecode constants from a function or stack level.', 'function debug.getconstants(func: (...any) -> (...any) | number): { number | string | boolean }', 'A table of constants.'],
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
            ['base64decode', 'Decodes a Base64 string back to its original data.', 'function base64decode(data: string): string', 'The decoded data.'],
            ['base64encode', 'Encodes data into a Base64 string.', 'function base64encode(data: string): string', 'The encoded Base64 string.'],
            ['lz4compress', 'Compresses data using the LZ4 algorithm.', 'function lz4compress(data: string): string', 'The LZ4-compressed data.'],
            ['lz4decompress', 'Decompresses LZ4-compressed data.', 'function lz4decompress(data: string): string', 'The decompressed data.'],
          ]
        },
        environment: {
          title: 'Environment',
          desc: 'Inspect executor environments, the registry and garbage-collected values.',
          fns: [
            ['getgc', 'Returns a table of all garbage-collected objects.', 'function getgc(includeTables?: boolean): { any }', 'A table of garbage-collected objects.'],
            ['getgenv', 'Returns the executor\'s shared global environment table.', 'function getgenv(): { [any]: any }', 'The executor global environment table.'],
            ['getreg', 'Returns the Luau registry table.', 'function getreg(): { [any]: any }', 'The Luau registry table.'],
            ['getrenv', 'Returns the Roblox global environment table.', 'function getrenv(): { [any]: any }', 'The Roblox global environment table.'],
            ['filtergc', 'Searches the garbage collector with a custom filter.', 'function filtergc(type: string, filter: (...any) -> boolean): { any }', 'A table of matching objects.'],
          ]
        },
        filesystem: {
          title: 'Filesystem',
          desc: 'Read, write and organize files in the executor workspace.',
          fns: [
            ['appendfile', 'Appends data to the end of a file.', 'function appendfile(path: string, data: string): ()', 'Nothing.'],
            ['delfile', 'Deletes a file from the workspace.', 'function delfile(path: string): ()', 'Nothing.'],
            ['delfolder', 'Deletes a folder from the workspace.', 'function delfolder(path: string): ()', 'Nothing.'],
            ['getcustomasset', 'Returns a content URL for a workspace file.', 'function getcustomasset(path: string): string', 'A content URL for the file.'],
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
            ['cloneref', 'Returns a new reference to an Instance.', 'function cloneref(instance: Instance): Instance', 'A new reference to the instance.'],
            ['compareinstances', 'Compares two Instances for equality by pointer.', 'function compareinstances(a: Instance, b: Instance): boolean', 'A boolean indicating whether both instances point to the same object.'],
            ['fireclickdetector', 'Fires a ClickDetector\'s click event.', 'function fireclickdetector(detector: ClickDetector, distance?: number): ()', 'Nothing.'],
            ['fireproximityprompt', 'Triggers a ProximityPrompt\'s hold or trigger.', 'function fireproximityprompt(prompt: ProximityPrompt, amount?: number): ()', 'Nothing.'],
            ['firetouchinterest', 'Fires a touch interest between two parts.', 'function firetouchinterest(part: BasePart, target: BasePart, toggle: boolean): ()', 'Nothing.'],
            ['getcallbackvalue', 'Returns the callback bound to a property.', 'function getcallbackvalue(object: any, property: string): (...any) -> (...any)', 'The callback bound to the property.'],
            ['gethui', 'Returns the executor\'s hidden UI container.', 'function gethui(): Instance', 'The hidden UI container.'],
            ['getinstances', 'Returns every Instance currently in memory.', 'function getinstances(): { Instance }', 'A table of Instances.'],
            ['getnilinstances', 'Returns every parentless Instance in memory.', 'function getnilinstances(): { Instance }', 'A table of parentless Instances.'],
          ]
        },
        metatable: {
          title: 'Metatable',
          desc: 'Access, replace and inspect protected metatables.',
          fns: [
            ['getnamecallmethod', 'Returns the current __namecall method name.', 'function getnamecallmethod(): string', 'The current namecall method.'],
            ['getrawmetatable', 'Returns an object\'s metatable, bypassing __metatable.', 'function getrawmetatable(object: any): { [any]: any }', 'The raw metatable.'],
            ['isreadonly', 'Returns whether a table is marked read-only.', 'function isreadonly(table: { [any]: any }): boolean', 'A boolean indicating whether the table is read-only.'],
            ['setrawmetatable', 'Replaces an object\'s metatable directly.', 'function setrawmetatable(object: any, metatable: { [any]: any }): ()', 'Nothing.'],
            ['setreadonly', 'Marks a table as read-only or writable.', 'function setreadonly(table: { [any]: any }, readonly: boolean): ()', 'Nothing.'],
          ]
        },
        miscellaneous: {
          title: 'Miscellaneous',
          desc: 'Utility functions that don\'t belong to a specific category.',
          fns: [
            ['identifyexecutor', 'Returns the executor\'s name and version.', 'function identifyexecutor(): string, string', 'The executor name and version.'],
            ['request', 'Sends an HTTP request from the executor.', 'function request(options: { [any]: any }): { [any]: any }', 'The response object.'],
            ['settimescale', 'Sets the engine\'s secondsPerStep to speed up physics locally — an undetectable walkspeed or carspeed for most games.', 'function settimescale(scale: number): ()', 'Nothing.'],
          ]
        },
        reflection: {
          title: 'Reflection',
          desc: 'Reflect on functions, types and runtime state.',
          fns: [
            ['gethiddenproperty', 'Reads a hidden property from an Instance.', 'function gethiddenproperty(instance: Instance, property: string): any, boolean', 'The property value and whether it is hidden.'],
            ['getthreadidentity', 'Returns the current thread\'s identity level.', 'function getthreadidentity(): number', 'The current thread identity level.'],
            ['isscriptable', 'Returns whether a property is scriptable.', 'function isscriptable(instance: Instance, property: string): boolean', 'A boolean indicating whether the property is scriptable.'],
            ['sethiddenproperty', 'Writes a hidden property on an Instance.', 'function sethiddenproperty(instance: Instance, property: string, value: any): boolean', 'A boolean indicating success.'],
            ['setscriptable', 'Toggles the scriptable flag on a property.', 'function setscriptable(instance: Instance, property: string, scriptable: boolean): ()', 'Nothing.'],
            ['setthreadidentity', 'Sets the current thread\'s identity level.', 'function setthreadidentity(identity: number): ()', 'Nothing.'],
          ]
        },
        scripts: {
          title: 'Scripts',
          desc: 'Manage, load and inspect running scripts.',
          fns: [
            ['getcallingscript', 'Returns the script that called the current thread.', 'function getcallingscript(): Instance', 'The calling script.'],
            ['getloadedmodules', 'Returns all currently loaded ModuleScripts.', 'function getloadedmodules(): { Instance }', 'A table of loaded ModuleScripts.'],
            ['getrunningscripts', 'Returns all currently running scripts.', 'function getrunningscripts(): { Instance }', 'A table of running scripts.'],
            ['getscriptbytecode', 'Returns a script\'s compiled bytecode.', 'function getscriptbytecode(script: Instance): string', 'The compiled bytecode.'],
            ['getscriptclosure', 'Returns a script\'s main closure.', 'function getscriptclosure(script: Instance): (...any) -> (...any)', 'The main closure of the script.'],
            ['getscriptfromthread', 'Returns the script a thread belongs to.', 'function getscriptfromthread(thread: thread): Instance', 'The script belonging to the thread.'],
            ['getscripthash', 'Returns a hash of a script\'s bytecode.', 'function getscripthash(script: Instance): string', 'A string hash of the script bytecode.'],
            ['getscripts', 'Returns every script currently in memory.', 'function getscripts(): { Instance }', 'A table of scripts.'],
            ['getsenv', 'Returns a script\'s local environment table.', 'function getsenv(script: Instance): { [any]: any }', 'The script\'s local environment.'],
          ]
        },
        signals: {
          title: 'Signals',
          desc: 'Hook and inspect Roblox signals and event connections.',
          fns: [
            ['The Connection object', 'A live connection to a signal, with fields for the callback and state.', 'type Connection = { Enabled: boolean, Function: (...any) -> (...any), ... }', 'A connection object.'],
            ['firesignal', 'Fires a signal and runs its connected callbacks.', 'function firesignal(signal: RBXScriptSignal, ...: any): ()', 'Nothing.'],
            ['getconnections', 'Returns every connection attached to a signal.', 'function getconnections(signal: RBXScriptSignal): { Connection }', 'A table of connections.'],
            ['replicatesignal', 'Fires a signal and replicates it to the server.', 'function replicatesignal(signal: RBXScriptSignal, ...: any): ()', 'Nothing.'],
          ]
        },
        websocket: {
          title: 'WebSocket',
          desc: 'Open, send and receive data over WebSocket connections.',
          fns: [
            ['replace.with.real.func', 'Replace with real description.', 'function replace.with.real.func(): ()', 'Nothing.'],
          ]
        }
      };

      var categoryOrder = ['closures','debug','drawing','encoding','environment','filesystem','instances','metatable','miscellaneous','reflection','scripts','signals','websocket'];
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
