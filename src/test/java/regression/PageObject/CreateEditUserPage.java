package regression.PageObject;

import com.devskiller.jfairy.Fairy;
import com.devskiller.jfairy.producer.person.Person;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import static org.hamcrest.MatcherAssert.assertThat;

public class CreateEditUserPage extends basePage {


    @FindBy(how = How.ID, using = "UserName")
    WebElement name;

    @FindBy(how = How.ID, using = "MobileNumber")
    WebElement mobileNumber;

    @FindBy(how = How.ID, using = "EmailID")
    WebElement emailId;

    @FindBy(how = How.ID, using = "Password")
    WebElement password;

    @FindBy(how = How.ID, using = "UserType")
    WebElement userType;

    @FindBy(how = How.ID, using = "BranchID")
    WebElement branchId;

    @FindBy(how = How.XPATH, using = "//button[text()='Submit']")
    WebElement submitButton;

    @FindBy(how = How.XPATH, using = "//h1[text()='User Details']")
    WebElement userDetails;

    @FindBy(how = How.XPATH, using = "//button[@class='btn green']")
    WebElement editSubmitBtn;

    Fairy fairy = Fairy.create();
    Person person = fairy.person();

    public void createUser(String UserType) {

        name.sendKeys(person.getFullName());
        mobileNumber.sendKeys(person.getTelephoneNumber());
        emailId.sendKeys(person.getEmail());
        password.sendKeys(person.getPassword());
        Select selectUserType = new Select(userType);
        selectUserType.selectByVisibleText(UserType);
        Select selectBranch = new Select(branchId);
        selectBranch.selectByVisibleText("Visakhapatnam");
        submitButton.click();

    }

    private void clearUserDetails() {
        name.clear();
        mobileNumber.clear();
        emailId.clear();
        password.clear();
        Select selectUserType = new Select(userType);
        selectUserType.selectByVisibleText("- Select UserType -");
        Select selectBranch = new Select(branchId);
        selectBranch.selectByVisibleText("- Select Branch -");


    }

    public void editUserDetails(String UserType) {

        clearUserDetails();
        name.sendKeys(person.getFullName());
        mobileNumber.sendKeys(person.getTelephoneNumber());
        emailId.sendKeys(person.getEmail());
        password.sendKeys(person.getPassword());
        Select selectUserType = new Select(userType);
        selectUserType.selectByVisibleText(UserType);
        Select selectBranch = new Select(branchId);
        selectBranch.selectByVisibleText("Visakhapatnam");
        editSubmitBtn.click();
    }


    public boolean isUserCreated() {

        return userDetails.isDisplayed();

    }

    public boolean isUserEdited() {
        return userDetails.isDisplayed();
    }


}
