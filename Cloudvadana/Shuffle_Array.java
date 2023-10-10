import java.util.Arrays; // Add this import statement for Arrays
import java.util.Random;

public class Shuffle_Array {
    public static void main(String[] args) {
        // Create an array with the values (1, 2, 3, 4, 5, 6, 7)
        int[] array = {1, 2, 3, 4, 5, 6, 7};

        // Print the original array
        System.out.println("Original array: " + Arrays.toString(array));

        // Shuffle the array
        shuffleArray(array);

        // Print the shuffled array
        System.out.println('\n' + "Shuffled array: " + Arrays.toString(array));
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();
        for (int i = 0; i < n; i++) {
            int change = i + random.nextInt(n - i);
            swap(array, i, change);
        }
    }

    public static void swap(int[] array, int i, int change) {
        int temp = array[i];
        array[i] = array[change];
        array[change] = temp;
    }
}
