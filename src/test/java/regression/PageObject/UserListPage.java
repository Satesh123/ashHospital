package regression.PageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UserListPage extends basePage {

    @FindBy(how = How.ID, using = "sample_editable_1_new")
    WebElement addUser;

    public void gotoAddCreateUser(){

        addUser.click();

    }
}
