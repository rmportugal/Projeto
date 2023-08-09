package br.com.neki.projetoback.dto;

public class UserSkillDTO {

	private Long userSkillId;
	private Integer id;
	private Integer skillId;
	private String imageUrl;
	private String level;
	private String name;
	private String description;
	
	public UserSkillDTO(Long userSkillId, Integer id, Integer skillId, String imageUrl, String level, String name,
			String description) {
		super();
		this.userSkillId = userSkillId;
		this.id = id;
		this.skillId = skillId;
		this.imageUrl = imageUrl;
		this.level = level;
		this.name = name;
		this.description = description;
	}

	public UserSkillDTO() {
		super();
	}

	public Long getUserSkillId() {
		return userSkillId;
	}

	public void setUserSkillId(Long userSkillId) {
		this.userSkillId = userSkillId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
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
