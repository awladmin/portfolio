import { getRepoData } from '@/lib/github';

export const GET = async () => {
  try {
    const repo = await getRepoData();

    return Response.json({
      success: true,
      data: repo,
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes('GitHub API request failed with')) {
      const status = Number(error.message.split(' ').pop()) || 502;
      return Response.json(
        { success: false, error: 'Failed to fetch repository data.' },
        { status },
      );
    }

    return Response.json(
      { success: false, error: 'Unexpected error while loading repository data.' },
      { status: 500 },
    );
  }
};
