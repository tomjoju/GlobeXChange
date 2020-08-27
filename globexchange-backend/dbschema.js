let db = {
  reviews: [
    {
      country: "France",
      city: "Paris",
      zipcode: "75007",
      placeName: "Eiffel Tower",
      body:
        "One of the wonders of the world. It is a truly magnificent structure up close. MUST SEE!!",
      rating: "10/10",
      userHandle: "user",
      createdAt: "2020-05-30T09:57:07.737Z",
      commentCount: 3,
    },
  ],

  comments: [
    {
      userHandle: "user",
      body: "Hi, thanks for this excellent review :)",
      createdAt: "2020-05-30T09:57:07.737Z",
      reviewId: "dfjnfrsklfsiosrklfslk",
    },
  ],

  users: [
    {
      handle: "user",
      createdAt: "2020-05-30T09:57:07.737Z",
      email: "user@email.com",
      userId: "5spoZbMSsIV94kF7zqi2ueQ2r1b2",
      imageUrl: "jdfnjksrnfles",
      bio: "Hello, my name is user!",
      countriesTravelled: "England, Germany",
    },
  ],
};
