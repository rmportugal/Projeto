package br.com.neki.projetoback.domain;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "skil_cd_id")
    private Integer skillId;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "skil_tx_name")
    private String name;

    @Column(name = "skil_nm_level")
    private String level;

    @Column(name = "skil_tx_description")
    private String description;
    

    public Skill() {
        super();
    }

    public Skill(Integer skillId, String imageUrl, String name, String level, String description) {
        super();
        this.skillId = skillId;
        this.imageUrl = imageUrl;
        this.name = name;
        this.level = level;
        this.description = description;
    }

    

    public Integer getSkillId() {
		return skillId;
	}

	public void setSkillId(Integer skillId) {
		this.skillId = skillId;
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

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


    @Override
    public String toString() {
        return "Skill [skillId=" + skillId + ", imageUrl=" + imageUrl + ", name=" + name + ", level=" + level
                + ", description=" + description + "]";
    }
}
