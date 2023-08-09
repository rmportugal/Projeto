package br.com.neki.projetoback.domain;

import br.com.neki.projetoback.security.domain.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_skills")
public class UserSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usk_cd_id")
    private Long userSkillId;

    @ManyToOne
    @JoinColumn(name = "usu_cd_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "skil_cd_id")
    private Skill skill;

    @Column(name = "skil_nm_level")
    private String level;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "skil_tx_name")
    private String name;

    @Column(name = "skil_tx_description")
    private String description;
    
    public UserSkill() {
    }

    public UserSkill(User user, Skill skill, String level, String imageUrl, String name, String description) {
        this.user = user;
        this.skill = skill;
        this.level = level;
        this.imageUrl = imageUrl;
        this.name = name;
        this.description = description;
    }




    public Long getUserSkillId() {
		return userSkillId;
	}

	public void setUserSkillId(Long userSkillId) {
		this.userSkillId = userSkillId;
	}

	public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
