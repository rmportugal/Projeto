package br.com.neki.projetoback.security.domain;

import java.util.HashSet;
import java.util.Set;

import br.com.neki.projetoback.domain.Skill;
import br.com.neki.projetoback.domain.UserSkill;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users", uniqueConstraints = {
    @UniqueConstraint(columnNames = "usu_tx_username"),
})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usu_cd_id")
    private Integer id;

    @NotBlank
    @Size(max = 20)
    @Column(name = "usu_tx_username")
    private String username;

    @NotBlank
    @Size(max = 120)
    @Column(name = "usu_tx_password")
    private String password;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserSkill> userSkills = new HashSet<>();


    public User() {
        super();
    }

    public User(Integer id, String userName, String password) {
        super();
        this.id = id;
        this.username = userName;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<UserSkill> getUserSkills() {
        return userSkills;
    }

    public void setUserSkills(Set<UserSkill> userSkills) {
        this.userSkills = userSkills;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public void addRole(Object findByName) {
        // TODO Auto-generated method stub
    }

	public void addSkill(Skill predefinedSkill) {
		// TODO Auto-generated method stub
		
	}

	public void removeSkill(Skill skill) {
		// TODO Auto-generated method stub
		
	}
}
