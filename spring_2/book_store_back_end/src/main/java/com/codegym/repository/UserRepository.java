package com.codegym.repository;

import com.codegym.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<AppUser, Integer> {

    @Query(value = "select * from app_user a where a.username = :name and is_deleted = 0", nativeQuery = true)
    AppUser findAppUserByName(@Param("name") String name);

    @Modifying
    @Query(value = "update app_user set password =?1 where username = ?2", nativeQuery = true)
    void saveNewPassword(String password, String name);

         //deleteUser
    @Transactional
    @Modifying
    @Query(value = "update app_user set is_deleted = 1 where id = :id", nativeQuery = true)
    void deleteUser(@Param("id") int id);

        //list user
    @Query(value = "select * from app_user", nativeQuery = true)
    List<AppUser> findAll();

    @Modifying
    @Query(value = "insert into app_user (username, `password`, email, address, creation_date, is_deleted) values (:username, :password, :email, :address, current_date(), 0)", nativeQuery = true)
    void save(@Param("username") String username, @Param("password") String password, @Param("email") String email, @Param("address") String address);

    @Query(value = "select * from app_user where id = :id", nativeQuery = true)
    Optional<AppUser> findById(@Param("id") Integer id);

    @Modifying
    @Query(value = "update app_user set username = :username, `password` = :password, email = :email, address = :address where id = :id", nativeQuery = true)
    void edit(@Param("username") String username, @Param("password") String password, @Param("email") String email, @Param("address") String address, @Param("id") Integer id);

    @Query(value = "select username from app_user where username = :username", nativeQuery = true)
    String existsUserName(@Param("username") String username);

    @Query(value = "select email from app_user where email = :email", nativeQuery = true)
    String existsEmail(@Param("email") String email);
}
