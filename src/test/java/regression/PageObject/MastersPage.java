package regression.PageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MastersPage extends basePage {
    @FindBy(how = How.LINK_TEXT, using = "MASTERS")
    WebElement mastersLink;

    @FindBy(how = How.LINK_TEXT, using = "Users")
    WebElement usersLink;

    @FindBy(how = How.LINK_TEXT, using = "Sub Test")
    WebElement subTestLink;

    @FindBy(how = How.LINK_TEXT, using = "Group Test")
    WebElement groupTestLink;

    @FindBy(how = How.LINK_TEXT, using = " Assign Group Test ")
    WebElement assignGroupTestLink;

    @FindBy(how = How.ID, using = "sample_editable_1_new")
    WebElement addNewUser;

    @FindBy(how = How.XPATH, using = "//tr[4]//td[8]//a[1]")
    WebElement edit;

    @FindBy(how = How.PARTIAL_LINK_TEXT, using = "Group Te")
    WebElement groupTest;

    public void gotoUsers() {
        mastersLink.click();
        usersLink.click();

    }
    public void gotoGroupTest(){
        mastersLink.click();
        groupTestLink.click();
    }


    public void addNewUser() {

        addNewUser.click();
    }

    public void clickEdit() {

        edit.click();
    }

    public boolean isUserLogedIn() {

        return mastersLink.isDisplayed();
    }


}





