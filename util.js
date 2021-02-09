 export class util{
      prop_access(object, path) {
        if (typeof path != "string" || path === "") return object;
      
        if (typeof object != "object" || object == null) {
          console.log(path + " not exist");
          return;
        }
      
        const props = path.split(".");
        let property = object;
        props.forEach(function (prop) {
          if (!property.hasOwnProperty(prop)) {
            console.log(path + " not exist");
            return;
          }
          property = property[prop];
        });
        return property;
      }
    
        type_check_v1(val, type) {
        switch (typeof val) {
            case 'object':
                if (Array.isArray(val)) return type === "array";
                if (val === null) return type === "null";
                return type === "object";
            default:
                return typeof val === type;
        }
    }
    
      type_check_v2(val, config) {
        if (typeof(config) != "object" || config instanceof Array || config == null) {
            return false;
        }
    
        for(let key in config) {
            switch(key) {
                case 'type':
                    if(!type_check_v1(val, config[key])) return false;
                    break;
                case 'value':
                    if (JSON.stringify(config[key]) !== JSON.stringify(val)) return false;
                    break;
                case 'enum':
                    if (typeof (config[key]) != "object" || !(config[key] instanceof Array)) return false;
                    let found = false;
                    for (let word of config[key]) {
                        if (JSON.stringify(word) === JSON.stringify(val)) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) return false;
            }
        }
        return true;
    }
    
      type_check(arg, types) {
        let isChecked = type_check_v2(arg, types);
        // console.log({isChecked, types})
        if(!types.properties) return isChecked;
        for (const typeKey in types.properties) {
            isChecked = type_check(
                type_check_v1(arg, 'object') ? arg[typeKey] : arg
                , types.properties[typeKey]
            );
            if (!isChecked) break
        }
        return isChecked
    }
 }
 
 