$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("regression/superAdmin.feature");
formatter.feature({
  "line": 1,
  "name": "SupperAdmin Access",
  "description": "",
  "id": "supperadmin-access",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "1 Verify Superadmin can Edit user details",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He select Edit from action column",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He updates details and select UserType as \"\u003cUserType\u003e\" and click submit.",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All the updated data should be available for the selected user",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;",
  "rows": [
    {
      "cells": [
        "UserType"
      ],
      "line": 11,
      "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;1"
    },
    {
      "cells": [
        "SuperAdmin"
      ],
      "line": 12,
      "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;2"
    },
    {
      "cells": [
        "CallCenter"
      ],
      "line": 13,
      "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;3"
    },
    {
      "cells": [
        "LabTechnican"
      ],
      "line": 14,
      "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;4"
    },
    {
      "cells": [
        "Admin"
      ],
      "line": 15,
      "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;5"
    },
    {
      "cells": [
        "ILDBoy"
      ],
      "line": 16,
      "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;6"
    },
    {
      "cells": [
        "Manager"
      ],
      "line": 17,
      "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2406072700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "1 Verify Superadmin can Edit user details",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He select Edit from action column",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He updates details and select UserType as \"SuperAdmin\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All the updated data should be available for the selected user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 3583899500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6697405300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 553954800,
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
  "duration": 7859541100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 43843400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 440334900,
  "status": "passed"
});
formatter.before({
  "duration": 477993700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "1 Verify Superadmin can Edit user details",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He select Edit from action column",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He updates details and select UserType as \"CallCenter\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All the updated data should be available for the selected user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1161848700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6868695800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 635071000,
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
  "duration": 7538461200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 143756700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 395457500,
  "status": "passed"
});
formatter.before({
  "duration": 423788400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "1 Verify Superadmin can Edit user details",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He select Edit from action column",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He updates details and select UserType as \"LabTechnican\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All the updated data should be available for the selected user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1101278300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6580049500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 666434800,
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
  "duration": 7918500800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 342527900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 371604700,
  "status": "passed"
});
formatter.before({
  "duration": 401106700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "1 Verify Superadmin can Edit user details",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He select Edit from action column",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He updates details and select UserType as \"Admin\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All the updated data should be available for the selected user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1105196600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6823169100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 681793900,
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
  "duration": 7859013000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 314103300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 374413600,
  "status": "passed"
});
formatter.before({
  "duration": 404269500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "1 Verify Superadmin can Edit user details",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He select Edit from action column",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He updates details and select UserType as \"ILDBoy\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All the updated data should be available for the selected user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1110361600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6726217500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 799790900,
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
  "duration": 8408116400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 83774500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 543989300,
  "status": "passed"
});
formatter.before({
  "duration": 382781300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "1 Verify Superadmin can Edit user details",
  "description": "",
  "id": "supperadmin-access;1-verify-superadmin-can-edit-user-details;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "He navigate to Masters screen and selectUsers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He select Edit from action column",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He updates details and select UserType as \"Manager\" and click submit.",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All the updated data should be available for the selected user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1077520400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 6903277900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 828627400,
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
  "duration": 7410853400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 98271500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 580705900,
  "status": "passed"
});
formatter.before({
  "duration": 391052500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "2 Verify SuperAdmin can create group test",
  "description": "",
  "id": "supperadmin-access;2-verify-superadmin-can-create-group-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@02"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "SuperAdmin logedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "He navigate to Masters screen and select Group Test",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "In GroupTestName select AddNew",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Add group test name and price and click submit",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Group test created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.superadminLogedIn()"
});
formatter.result({
  "duration": 1031427000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectGroupTest()"
});
formatter.result({
  "duration": 1755484100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.inGroupTestNameSelectAddNew()"
});
formatter.result({
  "duration": 419474500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.addGroupTestNameAndPriceAndClickSubmit()"
});
formatter.result({
  "duration": 1305668400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.groupTestCreatedSuccessfully()"
});
formatter.result({
  "duration": 139588600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 653344600,
  "status": "passed"
});
});