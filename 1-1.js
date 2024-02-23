function sortUsers(users) {
	return users.sort((a, b) => {
		const userA = `${a.firstName}${a.lastName}${a.customerID}`;
		const userB = `${b.firstName}${b.lastName}${b.customerID}`;

		return userA.localeCompare(userB);
	});
}
