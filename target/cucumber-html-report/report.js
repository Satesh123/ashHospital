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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 2764044800,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 5073652700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 7714646500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 874869300,
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
  "duration": 10004015100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 47402300,
  "status": "passed"
});
formatter.after({
  "duration": 134200,
  "status": "passed"
});
formatter.before({
  "duration": 540578600,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1257046200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 7692687600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 852840000,
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
  "duration": 10663188500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 169207000,
  "status": "passed"
});
formatter.after({
  "duration": 43900,
  "status": "passed"
});
formatter.before({
  "duration": 550264300,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 2334410600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 7734742900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 728247200,
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
  "duration": 10001083800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 46846300,
  "status": "passed"
});
formatter.after({
  "duration": 25700,
  "status": "passed"
});
formatter.before({
  "duration": 424873000,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1374609500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8142577000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 754403900,
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
  "duration": 9585141200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 341887300,
  "status": "passed"
});
formatter.after({
  "duration": 35500,
  "status": "passed"
});
formatter.before({
  "duration": 471882600,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1577956200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8695248700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 1086086400,
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
  "duration": 10059003800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 300732200,
  "status": "passed"
});
formatter.after({
  "duration": 31300,
  "status": "passed"
});
formatter.before({
  "duration": 527755200,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1649179300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8996726000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSelectEditFromActionColumn()"
});
formatter.result({
  "duration": 1245137300,
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
  "duration": 11424779900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.allTheUpdatedDataShouldBeAvailableForTheSelectedUser()"
});
formatter.result({
  "duration": 341831400,
  "status": "passed"
});
formatter.after({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 516613700,
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
  "duration": 1990376700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectGroupTest()"
});
formatter.result({
  "duration": 2173446700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.inGroupTestNameSelectAddNew()"
});
formatter.result({
  "duration": 863809500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.addGroupTestNameAndPriceAndClickSubmit()"
});
formatter.result({
  "duration": 2621777900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.groupTestCreatedSuccessfully()"
});
formatter.result({
  "duration": 379181400,
  "status": "passed"
});
formatter.after({
  "duration": 39200,
  "status": "passed"
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 660907700,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1575584300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8259284700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 1175718000,
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
  "duration": 9785221500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 449189500,
  "status": "passed"
});
formatter.after({
  "duration": 44600,
  "status": "passed"
});
formatter.before({
  "duration": 525286200,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1932318200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 9292629100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 1241759000,
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
  "duration": 9063536200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 472183600,
  "status": "passed"
});
formatter.after({
  "duration": 40500,
  "status": "passed"
});
formatter.before({
  "duration": 433828000,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1368071500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8607570500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 1221136800,
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
  "duration": 9618467600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 117465800,
  "status": "passed"
});
formatter.after({
  "duration": 24400,
  "status": "passed"
});
formatter.before({
  "duration": 778601600,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1527118300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8089612400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 1133201500,
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
  "duration": 9263520200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 124623400,
  "status": "passed"
});
formatter.after({
  "duration": 29900,
  "status": "passed"
});
formatter.before({
  "duration": 883082800,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 2169676100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 9463071900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 1178824600,
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
  "duration": 9990928900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 99748500,
  "status": "passed"
});
formatter.after({
  "duration": 35300,
  "status": "passed"
});
formatter.before({
  "duration": 957746100,
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
  "name": "He navigate to Masters screen and select Users",
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
  "duration": 1897144100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToMastersScreenAndSelectUsers()"
});
formatter.result({
  "duration": 8922557700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heNavigateToAddNew()"
});
formatter.result({
  "duration": 1250597600,
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
  "duration": 10993723100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.newUserCreatedSuccessfully()"
});
formatter.result({
  "duration": 137884000,
  "status": "passed"
});
formatter.after({
  "duration": 23400,
  "status": "passed"
});
});