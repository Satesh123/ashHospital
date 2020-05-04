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

#  @03
#  Scenario Outline:3 Verify Superadmin can not be able to Submit the Edited data without mandatory entry of all the fields
#    Given SuperAdmin logedIn
#    And He navigate to Masters screen and selectUsers
#    And He select Edit from action column
#    When He clear and edit new details accept one name as "<Name>"/MobileNo as "<MobileNumber>"/Password as "<Password>"/UserType as "<UserType>" and Branchname as "<BranchName>" and click submit
#    Then error message should be appear as "<ErrorMessage>"
#    Examples:
#      | Name | MobileNumber | Password | UserType            | BranchName        | ErrorMessage                      |
#      |      | 0784523152   | test123  | Manager             | Visakhapatnam     | Please fill in this field         |
#      | John |              | test123  | Admin               | Visakhapatnam     | Please fill in this field         |
#      | John | 0784523152   |          | CallCenter          | Visakhapatnam     | Please fill in this field         |
#      | John | 0784523152   | test123  | - Select UserType - | Visakhapatnam     | Please select an item in the list |
#      | John | 0784523152   | test123  | ILDBoy              | - Select Branch - | Please select an item in the list |







