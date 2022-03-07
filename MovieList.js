function show(episodes) {
  episodes.forEach((episode) => {
    console.log(makeEpisodeCode(episode), getName(episode));
  });
}

function makeEpisodeCode(episode) {
  const paddedEpisode = String(episode.number).padStart(2, "0");
  let paddedSeason = String(episode.season).padStart(2, "0");
  return `S${paddedSeason}E${paddedEpisode}`;
}

function getName(episode) {
  return episode.name;
}

module.exports = {
  show,
  getName,
  makeEpisodeCode,
};
