
/**
 * imports
 */
import Chalk from 'chalk';
import _isTypeObject from '../js/isTypeObject.js';
import _isFunction from '../js/isFunction.js';

/**
 * Prints args
 * 
 * @param object|array  params 
 * @param number        indentation 
 * @param bool          filter 
 * 
 * @return void
 */
export default function print(params, indentation = 0, filter = true) {
    Object.keys(params).forEach(prop => {
        if (filter && (prop === 'ROOT' || prop.startsWith('__'))) {
            return;
        }
        console.log(Chalk.blueBright('> ') + '  '.repeat(indentation) + prop + ': ' + (
            _isFunction(params[prop]) ? '(function)' + params[prop].name : (_isTypeObject(params[prop]) ? '(object)' : Chalk.blueBright(params[prop]))
        ));
        if (_isTypeObject(params[prop])) {
            print(params[prop], indentation + 1, filter);
        }
    });
};
