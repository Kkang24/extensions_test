/**
 * The following file is generated through a build script. Manually modifying it is an at-your-own-risk activity and your changes will likely be overridden.
 */

(function () {    
    class Test extends Extension {
        constructor(ide) {
            super('Test');
            this.ide = ide;
        }

        getMenu() {
            return {
				'print': () => {
                    fetch("http://localhost:8383/", 
                        {method: "POST", headers: {'Content-Type': 'application/json'}, 
                        body: JSON.stringify({xml: this.ide?.getSerializedRole()})}).catch(console.error);
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

    const queryString = window.location.search;
    console.log(queryString);
})();