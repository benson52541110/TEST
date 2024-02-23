function sortByProfession(users) {
	const professionPriority = {
		systemAnalytics: 5,
		engineer: 4,
		productOwner: 3,
		freelancer: 2,
		student: 1,
	};

	return users.sort((a, b) => {
		const priorityA = professionPriority[a.profession];
		const priorityB = professionPriority[b.profession];

		return priorityB - priorityA;
	});
}
