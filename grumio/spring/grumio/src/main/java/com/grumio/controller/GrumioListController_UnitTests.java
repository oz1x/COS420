import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import java.util.List;

public class GrumioListControllerTest {

    private GrumioListController controller;

    @Before
    public void setUp() {
        controller = new GrumioListController();
    }

    @Test
    public void testGetList() {
        List<String> userList = controller.getList();
        assertNotNull(userList);
        assertEquals(6, userList.size()); // Check initial size of the list
        assertTrue(userList.contains("Sepideh"));
        assertTrue(userList.contains("Ozwin"));
        assertTrue(userList.contains("Joe"));
        assertTrue(userList.contains("Odin"));
        assertTrue(userList.contains("Dylan"));
        assertTrue(userList.contains("Raist"));
    }

    @Test
    public void testSubmitExistingUser() {
        assertTrue(controller.submit("Sepideh"));
    }

    @Test
    public void testSubmitNewUser() {
        assertFalse(controller.submit("NewUser"));
    }

    @Test
    public void testTest() {
        List<String> userList = controller.test("NewUser");
        assertNotNull(userList);
        assertTrue(userList.contains("NewUser"));
        assertEquals(7, userList.size()); // Check size after adding a new user
    }

    @Test
    public void testSubmitDuplicateUser() {
        assertTrue(controller.submit("Sepideh"));
        List<String> userList = controller.getList();
        assertEquals(6, userList.size()); // Check size remains the same
    }
}