export default function Footer() {
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-text-secondary">
          © {new Date().getFullYear()} Ibrahim Yebdri. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
