import React from "react";
import "./Favorites.css";
import favoritesBuildLogo from "../images/FavoritesBuildLogo.png"


function FavoritesPage(){
      return (
      <div style={{ textAlign: 'center'}}>
            <img src={favoritesBuildLogo} alt="Logo" style={{ maxWidth: '60%', height: '240px', paddingTop: '80px'}} />
            <div style={{ marginTop: '20px', fontSize: '40px', fontWeight: 'bold', paddingBottom: '20px' }}>
                  Coming Soon!
      </div>
      <div style={{ width: '35%', margin: '0 auto', fontSize: '28px', paddingBottom: '80px' }}>
        Stay tuned, we're working on some exciting new features for your Virgil Vault.
    </div>
</div>
      );
}

export default FavoritesPage;