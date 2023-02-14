import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
});

export default breakpoints;
