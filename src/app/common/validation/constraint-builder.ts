export class ConstraintBuilder {
    private constructor() {}

    // takes a set of constraints and strips the "required" constraint for each of the specified
    // attributes (or all attributes, if none are specified)
    static stripRequiredConstraints(constraints: any, keysToStrip: Array<string> = null): any {
      if (constraints == null) { return null; }

      const keysToBeStripped = keysToStrip || Object.keys(constraints);

      const newConstraints = keysToBeStripped
        .reduce((modifiedConstraints, key) => {
          let constraint = Object.assign({}, constraints[key]);
          delete constraint.required;
          modifiedConstraints[key] = constraint;
          return modifiedConstraints;
        }, {});

        return newConstraints;
    }
}