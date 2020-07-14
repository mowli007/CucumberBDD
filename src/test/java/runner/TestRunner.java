package runner;

import Automation.XMLDataReader;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;

import javax.xml.xpath.XPathExpressionException;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        tags = {"@web"},
        glue = {"steps"},
        format = {"pretty", "html:target/cucumber"})

public class TestRunner {
    public static WebDriver driver;

    @BeforeClass
    public static void launchBrowser() throws XPathExpressionException {

        if (XMLDataReader.readData("//browser").equals("chrome")) {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        } else if (XMLDataReader.readData("//browser").equals("firefox")) {
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        } else {
            driver = new SafariDriver();
        }
    }

    @AfterClass
    public static void killSession() {
        driver.quit();
    }
}
