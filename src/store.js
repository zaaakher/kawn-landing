import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 5,
  paragraphs: [
    {
      offset: 1,
      factor: 2,
      header: "PHASE 1",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."
    },
    {
      offset: 1.5,
      factor: 2,
      header: "PHASE 2",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1,
      text: "The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."
    },
    {
      offset: 2,
      factor: 2,
      header: "PHASE 3",
      image: "/ph1.jpg",
      aspect: 1,
      text: "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."
    },
    {
      offset: 2.5,
      factor: 2,
      header: "PHASE 4",
      image: "/ph3.jpg",
      aspect: 1,
      text: "We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."
    },
    {
      offset: 3,
      factor: 2,
      header: "PHASE 5",
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1,
      text: "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."
    },
    { offset: 3.5, factor: 2, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.1, pos: new Vector3(), scale: 1, factor: 2 },
    { x: 0, offset: 0.6, pos: new Vector3(), scale: 1, factor: 2 },
    { x: 0, offset: 1.1, pos: new Vector3(), scale: 1, factor: 2 },
    { x: 0, offset: 1.6, pos: new Vector3(), scale: 1, factor: 2 },
    { x: 0, offset: 2.1, pos: new Vector3(), scale: 1, factor: 2 },
    { x: 0, offset: 2.6, pos: new Vector3(), scale: 1, factor: 2 },
    { x: 0, offset: 3.1, pos: new Vector3(), scale: 1, factor: 2 },
    { x: 0, offset: 3.6, pos: new Vector3(), scale: 1, factor: 2 }
  ],
  top: createRef()
}

export default state
