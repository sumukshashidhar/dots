# API Documentation

## Structuring of requests.

To maintain simplicity, we will host the API on the same service that we are hosting our primary web application built with Django. Every request has to be prefixed like so

```
/api/{api_version_tag}/{route}
```

For example

```
/api/v1/getTests
```



## Planned Functionality

The following is the functionality planned

### Creation of Tests - Teachers
**Version 1**
For Version 1 of our testing system, we will restrict ourself to multiple choice tests only

Teachers will be able to create tests. Image linking is a feature that is planned as well


### Deletion of Tests - Teachers
### Viewing Tests - Students
### Grading of Tests - Teachers. Possibly Autograding
### Saving Student Responses to Tests







