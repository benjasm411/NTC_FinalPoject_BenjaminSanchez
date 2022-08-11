package mx.tc.final_project.BackendFinalProject.service;

import mx.tc.final_project.BackendFinalProject.dao.UserDao;
import mx.tc.final_project.BackendFinalProject.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDao userDao;

    @Override
    @Transactional (readOnly = true)
    public List<User> userListed() {
        return (List<User>) userDao.findAll();
    }

    @Override
    @Transactional
    public void save(User user) {
        userDao.save(user);
    }

    @Override
    @Transactional
    public void delete(User user) {
        userDao.delete(user);
    }

    @Override
    @Transactional (readOnly = true)
    public User findUser(User user) {
        return userDao.findById(user.getUserID()).orElse(null);
    }

    @Override
    @Transactional(readOnly = true)
    public Integer findUserIdByUserName(String userName) {
        return userDao.getUserIdByUserName(userName);
    }

    @Override
    @Transactional
    public User findExistedUserByUserName(String userName1) {
        return userDao.getExistedUserByUserName(userName1);
    }
}
