import styles from "./ndex.module.scss";

const LinkPaste = () => {
  return (
    <div className={styles.text_input_container}>
      <input
        type="text"
        className={styles.text_input}
        placeholder="Paste URL Drive link here"
      />
    </div>
  );
};

export default LinkPaste;
