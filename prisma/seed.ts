import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
      name:  'Demo Fan',
      email: 'demo@f1rewind.com',
      posts: {
        create: [
          {
            content: 'Welcome to F1 Rewind, feel free to discuss any race!',
          },
        ],
      },
    },
  ];

    // populating some races
    const raceData: Prisma.RaceCreateManyInput[] = [
        {
          title:       '2025 Bahrain GP',
          date:        new Date('2025-04-15'),
          videoUrl:    'https://www.youtube.com/watch?v=B5bLBLKEs54',
          description: 'Bahrain Grand Prix | F1: Extended Highlights',
        },
        {
          title:       'That Night in Abu Dhabi - Formula 1 Short film',
          date:        new Date('2025-04-18'),
          videoUrl:    'https://www.youtube.com/watch?v=Z3zUcAwOs1A&t=351s',
          description: 'That Night in Abu Dhabi - Formula 1 Short film',
        },
        {
          title:       'F1 Edit - Survivor (2024 Hype Video)',
          date:        new Date('2025-04-17'),
          videoUrl:    'https://www.youtube.com/watch?v=3BEHQEiDgW0',
          description: 'F1 Edit - Survivor (2024 Hype Video)',
        },
        {
          title:'This is Formula 1 - Short Film',
          date:        new Date('2025-04-16'),
          videoUrl:    'https://www.youtube.com/watch?v=ukIFnF_Zr-0',
          description: 'This is Formula 1 - Short Film',
        },
      ];


    async function main() {
  // Upsert each user (so rerunning the seed won’t create duplicates)
  for (const u of userData) {
    await prisma.user.upsert({
      where:  { email: u.email! },
      update: {},
      create: u,
    });
  }

  // Bulk‑create races, skipping duplicates
  await prisma.race.createMany({
    skipDuplicates: true,
    data:            raceData,
  });

  // Grab our demo user for the posts and picks
  const user = await prisma.user.findUnique({
    where: { email: 'demo@f1rewind.com' },
  });
  if (!user) throw new Error('Demo user not found');

  // Create one discussion post
  await prisma.discussionPost.create({
    data: {
      content:  'This Bahrain race had unbelievable strategy calls!',
      authorId: user.id,
    },
  });

  // Create one fantasy pick on the earliest race
  const firstRace = await prisma.race.findFirst({ orderBy: { date: 'asc' } });
  if (firstRace) {
    await prisma.fantasyPick.create({
      data: {
        pick:   'Lewis Hamilton',
        userId: user.id,
        raceId: firstRace.id,
      },
    });
  }

  console.log('🛢️  Seed data created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });