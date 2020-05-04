$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("regression/superAdmin.feature");
formatter.feature({
  "line": 1,
  "name": "SupperAdmin Access",
  "description": "",
  "id": "supperadmin-access",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Super admin can create a new user",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "He navigate to Add New",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "He updates details and select UserType as \"\u003cUserType\u003e\" and click submit.",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "New user created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user;",
  "rows": [
    {
      "cells": [
        "UserType"
      ],
      "line": 35,
      "id": "supperadmin-access;super-admin-can-create-a-new-user;;1"
    },
    {
      "cells": [
        "SuperAdmin"
      ],
      "line": 36,
      "id": "supperadmin-access;super-admin-can-create-a-new-user;;2"
    },
    {
      "cells": [
        "CallCenter"
      ],
      "line": 37,
      "id": "supperadmin-access;super-admin-can-create-a-new-user;;3"
    },
    {
      "cells": [
        "LabTechnican"
      ],
      "line": 38,
      "id": "supperadmin-access;super-admin-can-create-a-new-user;;4"
    },
    {
      "cells": [
        "Admin"
      ],
      "line": 39,
      "id": "supperadmin-access;super-admin-can-create-a-new-user;;5"
    },
    {
      "cells": [
        "ILDBoy"
      ],
      "line": 40,
      "id": "supperadmin-access;super-admin-can-create-a-new-user;;6"
    },
    {
      "cells": [
        "Manager"
      ],
      "line": 41,
      "id": "supperadmin-access;super-admin-can-create-a-new-user;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3091525200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Super admin can create a new user",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "He navigate to Add New",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "He updates details and select UserType as \"SuperAdmin\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "New user created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 4232183700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6870712600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 7517963200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperAdmin",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.heUpdatesDetailsAndSelectUserTypeAsAndClickSubmit(String)"
});
formatter.result({
  "duration": 8821708700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 116629000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 465629500,
  "status": "passed"
});
formatter.before({
  "duration": 687933700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Super admin can create a new user",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "He navigate to Add New",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "He updates details and select UserType as \"CallCenter\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "New user created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1817409300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6932188100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 8168418500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CallCenter",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.heUpdatesDetailsAndSelectUserTypeAsAndClickSubmit(String)"
});
formatter.result({
  "duration": 8376054700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 244762900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 326442100,
  "status": "passed"
});
formatter.before({
  "duration": 500667700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Super admin can create a new user",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "He navigate to Add New",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "He updates details and select UserType as \"LabTechnican\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "New user created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1293757300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6631437200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 7848659000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LabTechnican",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.heUpdatesDetailsAndSelectUserTypeAsAndClickSubmit(String)"
});
formatter.result({
  "duration": 7997355700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 254571300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 343387000,
  "status": "passed"
});
formatter.before({
  "duration": 435077500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Super admin can create a new user",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "He navigate to Add New",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "He updates details and select UserType as \"Admin\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "New user created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1410977100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 7187835000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 8200585200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.heUpdatesDetailsAndSelectUserTypeAsAndClickSubmit(String)"
});
formatter.result({
  "duration": 10329032600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 93787500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 595387700,
  "status": "passed"
});
formatter.before({
  "duration": 416411500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Super admin can create a new user",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "He navigate to Add New",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "He updates details and select UserType as \"ILDBoy\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "New user created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1249323300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8329103700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 8811619700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ILDBoy",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.heUpdatesDetailsAndSelectUserTypeAsAndClickSubmit(String)"
});
formatter.result({
  "duration": 9000803100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 516159200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 386266900,
  "status": "passed"
});
formatter.before({
  "duration": 433234100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Super admin can create a new user",
  "description": "",
  "id": "supperadmin-access;super-admin-can-create-a-new-user;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "He navigate to Add New",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "He updates details and select UserType as \"Manager\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "New user created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1419703000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8094495000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 10766476500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.heUpdatesDetailsAndSelectUserTypeAsAndClickSubmit(String)"
});
formatter.result({
  "duration": 10079316200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 85274900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 727397700,
  "status": "passed"
});
});