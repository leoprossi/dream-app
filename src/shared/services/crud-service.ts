/**
 * Basic interface for the services.
 * Every function returns Promisse<any> because
 * of async storage handling.
 */
export interface CrudService<T> {
    
    /**
     * Creates a new register and must persist it.
     * @param register the new register
     */
    create(register: T): Promise<any>;

    /**
     * Recovers all data stored;
     */
    getAll(): Promise<any>;

    /**
     * Updates an existing register
     * @param register the new register.
     */
    update(register: T): Promise<any>;

    /**
     * Deletes a register.
     * @param register the register to be deleted.
     */
    delete(register: T): Promise<any>;
}