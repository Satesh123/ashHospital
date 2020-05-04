Feature: SupperAdmin Access

  @01
  Scenario Outline:1 Verify Superadmin can Edit user details
    Given SuperAdmin logedIn
    And He navigate to Masters screen and selectUsers
    And He select Edit from action column
    When He updates details and select UserType as "<UserType>" and click submit.
    Then All the updated data should be available for the selected user
    Examples:
      | UserType     |
      | SuperAdmin   |
      | CallCenter   |
      | LabTechnican |
      | Admin        |
      | ILDBoy       |
      | Manager      |

  @02
  Scenario:2 Verify SuperAdmin can create group test
    Given SuperAdmin logedIn
    And He navigate to Masters screen and select Group Test
    And In GroupTestName select AddNew
    When Add group test name and price and click submit
    Then Group test created successfully

  @03
  Scenario Outline: Super admin can create a new user
    Given SuperAdmin logedIn
    And He navigate to Masters screen and selectUsers
    And He navigate to Add New
    When He updates details and select UserType as "<UserType>" and click submit.
    Then New user created successfully
    Examples:
      | UserType     |
      | SuperAdmin   |
      | CallCenter   |
      | LabTechnican |
      | Admin        |
      | ILDBoy       |
      | Manager      |











