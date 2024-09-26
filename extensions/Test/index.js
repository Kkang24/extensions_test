/**
 * The following file is generated through a build script. Manually modifying it is an at-your-own-risk activity and your changes will likely be overridden.
 */

(function () {    
    class Test extends Extension {
        constructor(ide) {
            super('Test');
            this.ide = ide;
        }

        onOpenRole() {

        }

        getSettings() {
            return [

            ];
        }

        getMenu() {
            return {
				'print': () => {
                    data2 = {xml: btoa(this.ide?.cloud?.username)};
                    fetch("http://localhost:8383/", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data2)}).catch(console.error);
                    alert(this.ide?.cloud?.username);
                    data = {xml: world.children[0].getSerializedRole()};
                    fetch("http://localhost:8383/", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}).catch(console.error);
                }

            };
        }

        getCategories() {
            return [
				new Extension.Category('Save & Load', new Color(150, 150, 150)),

            ];
        }
        getLabelParts() {
            return [

            ];
        }

    }

    NetsBloxExtensions.register(Test);
    let path = document.currentScript.src;
    path = path.substring(0, path.lastIndexOf("/"));
    var s = document.createElement('script');
    s.type = "module";
    s.innerHTML = `import init, {check_state, copy_stateflow_code, transition, visualize} from '${path}/pkg/netsblox_stateflow_ext.js';
    
    
        await init();

        window.StateMachine_fns = {};
		window.StateMachine_fns.check_state = check_state;
		window.StateMachine_fns.copy_stateflow_code = copy_stateflow_code;
		window.StateMachine_fns.transition = transition;
		window.StateMachine_fns.visualize = visualize;
        `;
    document.body.appendChild(s);
})();