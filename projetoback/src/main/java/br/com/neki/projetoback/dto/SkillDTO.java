package br.com.neki.projetoback.dto;

import java.util.List;

public class SkillDTO {
	private Integer skillId;
    private String imageUrl;
    private String name;
    private String level;
    private String description;

    

    public SkillDTO() {
    }

    public SkillDTO(Integer skillId, String imageUrl, String name, String level, String description) {
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

	public List<SkillDTO> getSkills() {
		return null;
	}

   
}

