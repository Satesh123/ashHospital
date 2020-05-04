package regression.PageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage extends basePage {

    @FindBy(how = How.LINK_TEXT, using = "MASTERS")
    WebElement mastersLink;

    @FindBy(how = How.LINK_TEXT, using = "Users")
    WebElement usersLink;

    @FindBy(how = How.ID, using = "sample_editable_1_new")
    WebElement addNew;

    @FindBy(how = How.XPATH, using = "//tr[4]//td[8]//a[1]")
    WebElement edit;

    @FindBy(how = How.PARTIAL_LINK_TEXT, using = "Group Te")
    WebElement groupTest;


    public void gotoUserListPage() {
        mastersLink.click();
        usersLink.click();
    }
    public void addNewUser(){
        gotoUserListPage();
        addNew.click();

    }
    public void clickEdit(){

        edit.click();
    }
    public boolean isUserLogedIn(){

        return mastersLink.isDisplayed();
    }
    public void gotoGroupTestPage(){
        mastersLink.click();
        groupTest.click();
    }
}
