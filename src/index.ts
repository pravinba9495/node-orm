export class NormModel {

    /**
     * Represents the ID of the entity
     */
    readonly id: number = 0;

    /**
     * Represents the timestamp of the creation of the entity
     */
    readonly createdAt: number = new Date().getTime();

    /**
     * Represents the timestamp of the modification of the entity
     */
    readonly updatedAt: number = 0;

    /**
     * Insert/Update a single entity in the database
     * @returns {Promise<number>} Inserted ID
     */
    public static SaveOne(): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        });
    }

    /**
     * Insert/Update multiple entities in the database
     * @returns {Promise<number[]>} List of inserted IDs
     */
    public static SaveMany(): Promise<number[]> {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        });
    }

    /**
     * Remove a single entity from the database
     * @returns {Promise<number>} Removed ID
     */
    public static DeleteOne(): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        });
    }

    /**
     * Remove multiple entities from the database
     * @returns {Promise<number[]>} List of removed IDs
     */
    public static DeleteMany(): Promise<number[]> {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        });
    }

    /**
     * Find one entity matching the search criteria
     * @returns {Promise<object>} Entity
     */
    public static FindOne(): Promise<object> {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        });
    }

    /**
     * Find all entities matching the search criteria
     * @returns {Promise<object[]>} Entities
     */
    public static FindMany(): Promise<object[]> {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        });
    }

}