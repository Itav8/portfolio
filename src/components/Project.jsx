import Skills from "./Skills";

import "../styles/Project.css";

const Project = (props) => {
  return (
    <div className="project-container">
      <h1 className="project-title">{props.title}</h1>
      <div className="project-content">
        <img
          alt="image placeholder"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAP1BMVEXm5+jp6uuTlZjAwMHX2NnKysuMjpKQkpXr7O3j5OWtr7Hg4eK0tbfBw8Wlp6mfoaSXmZzR0tS5u72vsbOoqan5fWL2AAAClElEQVR4nO3Wy27iQBBAUXfHdDdvk8z/f+vYvKMJEHEXrpHuXcECqXRU2NUtUmfv1nfygeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8XlS4d1u32ZcZBnheVb51I2F79+G3PIsHzpq+Zc+tOXtqvzTvOwqHyj2Mh3OM6WDqV+tle/mKWofGlbcj3vXNrnXNfzzvOgqHxd2+5X/Wn5FuMi1lXI9QvL16V2ActTl+dgrMLyXadqn3Xiq7uI6xeVb3nVWpd8Wr9DwEGD8rVVOb9r21c98eUh4PrF5EuLMj7sjoP15+Ub/74Bb+eYfOtp44bp0/H+u/jNPda/heRr+8lsulXGiznf+Dbh/r4R+c7v2lwWKQ35rni3c0C+dH3c1eW2fuMLdzsH5OuuG1d335YvX14ncYrHd7tUfmgfbP3C8U03y+NKsGnD8S2f7N7YEGvaaHz3d95PBbudg/G1j+d609t47hnvi8WX+ld6wW7nWHzd8Eov2O0cii+tyi+KdLyE4ut+9VyL9PCLxfffJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDzXytWRv1vruz/bD3m3zF/b9FIMyRG2iAAAAAElFTkSuQmCC"
        />
      </div>
      <h2 className="project-tech__header">Technologies</h2>
      <Skills skills={props.skills} />
    </div>
  );
};

export default Project;
