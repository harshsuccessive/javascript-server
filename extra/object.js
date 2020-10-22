//to create and initialize object


let employee = {
    name: "user 1",
    Emp_id: 123,
    Profile: "Devops"
    }
    
    // To acces and print values of key directly
    console.log("Employee Name :",employee.name);
    console.log("Employee Profile :", employee.Profile);
    console.log();
    
    // Object assign is used for copy the properties from one source object to another target object
    const target = { Name: "User_name ", class: 10 };
    const source = { class: 12, roll_no : 5 };
    
    const returnedTarget = Object.assign(target, source);
    
    console.log(target);
    console.log(returnedTarget);
    console.log();
    const copy = Object.assign({}, employee);
    console.log(copy)

    //Merging object with same properties using Object.assign
    const o1 = { a: 1, b: 1, c: 1 };
    const o2 = { b: 2, c: 2 };
    const o3 = { c: 3 };
    
    const obj = Object.assign({}, o1, o2, o3);
    console.log("After merging" ,obj);
        
        // Obejct.asign use to wrap the primative'
        const v1 = 'Hi';
        const v2 = true;
        const v3 = 100;
        const obj1 = Object.assign({}, v1, null, v2, undefined, v3); // Primitives will be wrapped, null and undefined will be ignored.
        console.log(obj1);
        console.log();
        
        
        // Object.create methode create new objects using existing method
        
        const me = Object.create(employee);
        
        me.name = 'Harsh'; // "name" is a property set on "me", but not on "employee"
        me.E_id = 1 // inherited properties can be overwritten
        me.Profile = 'Devops'
        
        console.log(me);
        console.log();
        
        //The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
        
        for (const [key, value] of Object.entries(me)) {
        console.log(`${key}: ${value}`);
        }
        console.log();
        
        //To freeze an object that no one change in strict mode
        Object.freeze(me);
        console.log();
        console.log(Object.isFrozen(me)); //To check if it is frozen or not
        console.log();
        
        // Object.fromEntries() method transforms a list of key-value pairs into an object.
        const entries = new Map([
        ['name', 'AJ'],
        ['Age', 21]
        ]);
        const obj2 = Object.fromEntries(entries);
        console.log(obj2);
        console.log();
        
        // To check the keys
        console.log(Object.keys(employee));
        
      