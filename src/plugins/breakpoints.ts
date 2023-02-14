import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  mobile: 320,
  tablet: 880,
  laptop: 1024,
  desktop: 1280,
});

export default breakpoints;
