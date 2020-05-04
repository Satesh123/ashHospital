package regression;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import regression.PageObject.*;

public class MyStepdefs extends TestRunner {
    public LoginPage loginPage;
    public HomePage homePage;
    public UserListPage userListPage;
    public CreateEditUserPage userPage;
    public GroupTestPage grouptestPage;

    @Before
    public void start() {
        loginPage = new LoginPage();
        homePage = new HomePage();
        userListPage = new UserListPage();
        userPage = new CreateEditUserPage();
        grouptestPage = new GroupTestPage();
        driver.get("http://ahs.bananaapps.co.uk/");
    }

    @After
    public void stop(Scenario scenario) {

        if (!scenario.isFailed()) {
            byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshotBytes, "image/png");
        }

    }

    @Given("^SuperAdmin logedIn$")
    public void superadminLogedIn() {
        loginPage.login("07442382353", "Superadmin");
    }
    @And("^He navigate to Masters screen and selectUsers$")
    public void heNavigateToMastersScreenAndSelectUsers() {
        homePage.gotoUserListPage();
    }

    @And("^He select Edit from action column$")
    public void heSelectEditFromActionColumn() {
        homePage.clickEdit();
    }

    @When("^He updates details and select UserType as \"([^\"]*)\" and click submit\\.$")
    public void heUpdatesDetailsAndSelectUserTypeAsAndClickSubmit(String UserType) throws Throwable {
        userPage.editUserDetails(UserType);
    }
    @Then("^All the updated data should be available for the selected user$")
    public void allTheUpdatedDataShouldBeAvailableForTheSelectedUser() {
        userPage.isUserEdited();
    }

    @And("^He navigate to Masters screen and select Group Test$")
    public void heNavigateToMastersScreenAndSelectGroupTest() {
        homePage.gotoGroupTestPage();
    }

    @And("^In GroupTestName select AddNew$")
    public void inGroupTestNameSelectAddNew() {
        grouptestPage.addGroupTest();
    }
    @When("^Add group test name and price and click submit$")
    public void addGroupTestNameAndPriceAndClickSubmit() {
        grouptestPage.createNewGroupTest();
    }

    @Then("^Group test created successfully$")
    public void groupTestCreatedSuccessfully() {
        grouptestPage.newGroupTestCreated();
    }

    @When("^He clear and edit new details accept one name as \"([^\"]*)\"/MobileNo as \"([^\"]*)\"/Password as \"([^\"]*)\"/UserType as \"([^\"]*)\" and Branchname as \"([^\"]*)\" and click submit$")
    public void heClearAndEditNewDetailsAcceptOneNameAsMobileNoAsPasswordAsUserTypeAsAndBranchnameAsAndClickSubmit(String Name, String MobileNumber, String Password, String UserType, String BranchName) throws Throwable {

        userPage.canNoteditUserdetailswithoutRequiredfield(Name, MobileNumber, Password, UserType, BranchName);

        throw new PendingException();
    }

    @Then("^error message should be appear as \"([^\"]*)\"$")
    public void errorMessageShouldBeAppearAs(String ErrorMessage) throws Throwable {
        userPage.getError(ErrorMessage);
        throw new PendingException();
    }
}
